import { RankedTier } from '@/models/rankedTier.models'
import { RankedTierService } from '@/services/rankedTier.service'
import { RankedTierApi } from '@utils/interfaces/api.interface'
import { useEffect, useState } from 'react'

const useRankedTiers = () => {
  const [rankedTiers, setRankedTiers] = useState<RankedTier[]>()
  const loadData = async () => {
    const RankedTiersApi: RankedTierApi[] = await RankedTierService.findAll()
    const newRankedTiers = RankedTiersApi as RankedTier[]
    setRankedTiers([...newRankedTiers])
  }
  useEffect(() => {
    loadData()
  }, [])
  return { rankedTiers }
}
export default useRankedTiers
