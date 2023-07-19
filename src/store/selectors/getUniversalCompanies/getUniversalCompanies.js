export const getUniversalCompanies = (state) =>
  state?.universal?.companies || {
    status: 'idle',
    isInLocalStage: false,
    key: 'companies',
    length: 0,
  };
