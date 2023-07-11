export const getUniversalCities = (state) => state?.universal?.cities || {
  status: 'idle',
  isInLocalStage: false,
  key: 'cities',
  length: 0
}