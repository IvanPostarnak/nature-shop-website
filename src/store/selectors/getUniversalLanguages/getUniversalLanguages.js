export const getUniversalLanguages = (state) => state?.universal?.languages || {
  status: 'idle',
  isInLocalStage: false,
  key: 'languages',
  length: 0
}