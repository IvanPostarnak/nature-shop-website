export const getUniversalBrands = (state) => state?.universal?.brands || {
  status: 'idle',
  isInLocalStage: false,
  key: 'brands',
  length: 0
}