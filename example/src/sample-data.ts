const titles = [
  'My Aim is True',
  "This Year's Model",
  'Armed Forces',
  'Get Happy',
  'Trust',
  'Almost Blue',
  'Imperial Bedroom',
  'Punch the Clock',
  'Goodbye Cruel World',
  'King of America',
  'Blood and Chocolate',
  'Spike',
  'Mighty Like a Rose',
  'The Juliette Letters',
  'Brutal Youth',
  'Kojak Variety',
  'All This Useless Beauty',
  'Painted from Memory',
  'When I Was Cruel',
  'North',
  'The Delivery Man',
  'The River in Reverse',
  'Momofuku',
  'Secret, Profane & Sugarcane',
  'National Ransom'
]

export type TAlbumItem = {
  title: string
  year: number
}

export const items = Array.from({ length: 500 }).map((_, index) => ({
  year: index + 1,
  title: titles[index % titles.length]
}))
