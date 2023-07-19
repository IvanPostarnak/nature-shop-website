export const getUniversalCountries = (state) =>
  state?.universal?.countries || {
    status: 'idle',
    isInLocalStage: false,
    key: 'countries',
    length: 0,
  };
