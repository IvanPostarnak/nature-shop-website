export const getUniversalExchangeRates = (state) =>
  state?.universal?.exchange_rates || {
    status: 'idle',
    isInLocalStage: false,
    key: 'exchangeRates',
    length: 0,
  };
