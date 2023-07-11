export const getUniversalGenders = (state) => state?.universal?.genders || {
  status: 'idle',
  isInLocalStage: false,
  key: 'genders',
  length: 0
}