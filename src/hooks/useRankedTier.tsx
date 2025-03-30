import { RankedTier } from '@/models/rankedTier.model'
import { RankedTierService } from '@/services/rankedTier.service'
import { useState } from 'react'
import { toast } from 'react-toastify'

const useRankedTiers = () => {
  const [rankedTiers, setRankedTiers] = useState<RankedTier[]>([])
  const loadRankedTiers = async () => {
    try {
      const res = await RankedTierService.findAll()
      const newRankedTiers = RankedTierService.toRankedTiers(res.data)
      setRankedTiers([...newRankedTiers])
    } catch (error) {
      toast.error(`Error on get RankedTiers: ${error}`)
    }
  }

  return { rankedTiers, loadRankedTiers }
}
export default useRankedTiers
