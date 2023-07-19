export const getUniversalPaymentTypes = (state) =>
  state?.universal?.payment_types || {
    status: 'idle',
    isInLocalStage: false,
    key: 'paymentTypes',
    length: 0,
  };
