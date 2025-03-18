import { Match } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.models'
import CounterBox from '@components/CounterBox/CounterBox'
import Form from '@components/Form/Form'
import Input from '@components/Input/Input'
import Modal from '@components/modals/Modal'
import RangeInfo from '@components/RangeInfo/RangeInfo'
import Select from '@components/Select/Select'
import { zodResolver } from '@hookform/resolvers/zod'
import { DIVISION } from '@utils/constants/constants'
import { TierType } from '@utils/enums/rankedTier.enum'
import { RankedTierApi } from '@utils/interfaces/api.interface'
import { matchSchema, MatchValues } from '@utils/validations/match-schema'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import css from './CrudMatch.module.css'
type CrudMatchProps = {
  currentMatch: Match
  rankedTiers: RankedTierApi[]
}

function CrudMatch({ currentMatch, rankedTiers }: CrudMatchProps) {
  const {
    control,
    handleSubmit,
    // watch,
  } = useForm<MatchValues>({
    resolver: zodResolver(matchSchema),
  })
  const [localMatch, setLocalMatch] = useState(currentMatch)
  const rankedOptions = rankedTiers.map(({ _id, tierName }) => ({
    id: _id,
    value: tierName,
  }))

  const onChangeCounter = (victories: number, defeats: number) => {
    const match = { ...localMatch }
    match.victories = victories
    match.defeats = defeats
    setLocalMatch(match)
  }
  const onChangeRankedTier = (rankedTierID: string) => {
    const match = { ...localMatch }
    const rankedTierFounded = rankedTiers.find(
      ({ _id }) => _id === rankedTierID,
    )
    match.range.rankedTier = rankedTierFounded as RankedTier
    setLocalMatch(match)
  }
  const onChangeDivisionLvl = (divisionLvl: string) => {
    const match = { ...localMatch }
    match.range.divisionLvl = Number(divisionLvl)
    setLocalMatch(match)
  }

  const onSubmit = handleSubmit(() => {
    console.log('sending new match')
  })
  return (
    <Modal elementID={'crudMatch'}>
      <Form onSubmit={onSubmit}>
        <fieldset>
          <legend>Info</legend>
          <dl>
            <dt>Season:</dt>
            <dd>{localMatch.seasonProfile.season.seasonName}</dd>
            <dt> from date:</dt>
            <dd>
              <strong>{localMatch.date.toDateString()}</strong>
            </dd>
          </dl>
        </fieldset>
        <fieldset>
          <legend>Victories/Defeat</legend>
          <CounterBox updateMatch={onChangeCounter} match={localMatch} />
        </fieldset>
        <fieldset className={`${css.fieldset} ${css.range}`}>
          <legend>Range</legend>
          <RangeInfo range={localMatch.range} />
          <Select
            name='tierName'
            onSelectedOption={onChangeRankedTier}
            options={rankedOptions}
            selectedOption={{
              id: localMatch.range.rankedTier._id,
              value: localMatch.range.rankedTier.tierName,
            }}
          />
          {localMatch.range.rankedTier.tierType === TierType.DIVISION && (
            <Select
              name='divisionLvl'
              onSelectedOption={onChangeDivisionLvl}
              options={DIVISION}
              selectedOption={{
                id: localMatch.range.divisionLvl,
                value: localMatch.range.divisionLvl,
              }}
            />
          )}
          <Input
            label='marks'
            name='marks'
            type='number'
            control={control}
            defaultValue={localMatch.range.marks}
          />
        </fieldset>
        <button>Save Match</button>
      </Form>
    </Modal>
  )
}
export default CrudMatch
