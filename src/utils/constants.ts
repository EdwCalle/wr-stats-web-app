import { Scales } from './interfaces/season.interface'

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
  'I',
  'II',
  // '',
  'III',
  'IV',
]

// export const MARK = [
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
  { label: 'S1', value: 'S1' },
  { label: 'S2', value: 'S2' },
  { label: 'S3', value: 'S3' },
  { label: 'S4', value: 'S4' },
  { label: 'S5', value: 'S5' },
  { label: 'S6', value: 'S6' },
  { label: 'S7', value: 'S7' },
  { label: 'S8', value: 'S8' },
  { label: 'S9', value: 'S9' },
  { label: 'S10', value: 'S10' },
  { label: 'S11', value: 'S11' },
  { label: 'S12', value: 'S12' },
  { label: 'S13', value: 'S13' },
  { label: 'S14', value: 'S14' },
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
  chanllenger: '/src/assets/ranks/challenger.webp',
}

export const API_BASE_URL = 'http://localhost:3000/api/v1'
