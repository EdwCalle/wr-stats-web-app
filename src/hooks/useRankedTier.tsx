import { RankedTier } from '@/models/rankedTier.model'
import { RankedTierService } from '@/services/rankedTier.service'
import { useState } from 'react'
import { toast } from 'react-toastify'

const useRankedTiers = () => {
  const [rankedTiers, setRankedTiers] = useState<RankedTier[]>([])
  const loadRankedTiers = async (items: RankedTier[]) => {
    setRankedTiers([...items])
  }
  const getRankedTiers = async () => {
    try {
      const res = await RankedTierService.findAll()
      return RankedTierService.toRankedTiers(res.data)
    } catch (error) {
      toast.error(`Error on get RankedTiers: ${error}`)
      return []
    }
  }

  return { rankedTiers, getRankedTiers, loadRankedTiers }
}
export default useRankedTiers
