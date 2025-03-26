import { RankedTier } from '@/models/rankedTier.models'
import { RankedTierService } from '@/services/rankedTier.service'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useRankedTiers = () => {
  const [rankedTiers, setRankedTiers] = useState<RankedTier[]>()
  const loadData = async () => {
    try {
      const res = await RankedTierService.findAll()
      const newRankedTiers = RankedTierService.toRankedTiers(res.data)
      setRankedTiers([...newRankedTiers])
    } catch (error) {
      toast.error(`Error on get RankedTiers: ${error}`)
    }
  }
  useEffect(() => {
    loadData()
  }, [])
  return { rankedTiers }
}
export default useRankedTiers
