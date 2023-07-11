export const getUniversalColorSchemas = (state) => state?.universal?.color_schemas || {
  status: 'idle',
  isInLocalStage: false,
  key: 'colorSchemas',
  length: 0
}