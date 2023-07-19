export const getUniversalFamilyStatuses = (state) =>
  state?.universal?.family_statuses || {
    status: 'idle',
    isInLocalStage: false,
    key: 'familyStatuses',
    length: 0,
  };
