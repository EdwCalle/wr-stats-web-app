export const TIER = [
  'bronze',
  'gold',
  // '',
  'emerald',
  'diamond',
  'master',
  'grand master',
  'challenger',
  'soberano',
]
export const DIVISION = [
  { id: '1', value: 'I' },
  { id: '2', value: 'II' },
  // '',
  { id: '3', value: 'III' },
  { id: '4', value: 'IV' },
]
interface Scales {
  label: string
  value: number | string
}
export const TIME_SCALE: Scales[] = [
  { label: 'day', value: 0 },
  { label: 'month', value: 1 },
  { label: 'year', value: 2 },
  { label: '10 matchs', value: 3 },
  { label: '50 matchs', value: 4 },
  { label: '100 matchs', value: 5 },
  { label: '200 matchs', value: 6 },
  { label: '500 matchs', value: 7 },
]
export const FILTER_SEASONS: Scales[] = [
  { label: 'compare', value: 'compare' },
  { label: 'by season', value: 'by_season' },
]
export const SEASONS = [
  { id: 'S1', value: 'S1' },
  { id: 'S2', value: 'S2' },
  { id: 'S3', value: 'S3' },
  { id: 'S4', value: 'S4' },
  { id: 'S5', value: 'S5' },
  { id: 'S6', value: 'S6' },
  { id: 'S7', value: 'S7' },
  { id: 'S8', value: 'S8' },
  { id: 'S9', value: 'S9' },
  { id: 'S10', value: 'S10' },
  { id: 'S11', value: 'S11' },
  { id: 'S12', value: 'S12' },
  { id: 'S13', value: 'S13' },
  { id: 'S14', value: 'S14' },
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
