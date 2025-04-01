import { Option } from '@components/Select/Select'

// export const TIER = [
//   'bronze',
//   'gold',
//   // '',
//   'emerald',
//   'diamond',
//   'master',
//   'grand master',
//   'challenger',
//   'soberano',
// ]
export const DIVISION = [
  { id: '1', value: 'I' },
  { id: '2', value: 'II' },
  // '',
  { id: '3', value: 'III' },
  { id: '4', value: 'IV' },
]

export const TIME_SCALE: Option[] = [
  { value: 'day', id: 'day' },
  { value: 'month', id: 'month' },
  { value: 'year', id: 'year' },
  { value: '10 matchs', id: '10 matchs' },
  { value: '50 matchs', id: '50 matchs' },
  { value: '100 matchs', id: '100 matchs' },
  { value: '200 matchs', id: '200 matchs' },
  { value: '500 matchs', id: '500 matchs' },
]
export const SEASON_MODE: Option[] = [
  { value: 'by season', id: 'by_season' },
  { value: 'compare', id: 'compare' },
]

export const imagesTier = {
  iron: '/src/assets/ranks/iron.webp',
  bronze: '/src/assets/ranks/bronze.webp',
  silver: '/src/assets/ranks/silver.webp',
  gold: '/src/assets/ranks/gold.webp',
  platinum: '/src/assets/ranks/platinum.webp',
  emerald: '/src/assets/ranks/emerald.webp',
  diamond: '/src/assets/ranks/diamond.webp',
  master: '/src/assets/ranks/master.webp',
  grandmaster: '/src/assets/ranks/grandmaster.webp',
  challenger: '/src/assets/ranks/challenger.webp',
  default: '/src/assets/ranks/default.jpeg',
}
// TO DO
// fix ts problems ❌
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1'
