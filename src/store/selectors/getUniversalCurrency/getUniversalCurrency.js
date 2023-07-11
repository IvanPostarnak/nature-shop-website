export const getUniversalCurrency = (state) => state?.universal?.currency || {
  status: 'idle',
  isInLocalStage: false,
  key: 'currency',
  length: 0
}