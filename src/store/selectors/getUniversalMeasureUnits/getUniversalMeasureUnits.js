export const getUniversalMeasureUnits = (state) =>
  state?.universal?.measure_units || {
    status: 'idle',
    isInLocalStage: false,
    key: 'measureUnits',
    length: 0,
  };
