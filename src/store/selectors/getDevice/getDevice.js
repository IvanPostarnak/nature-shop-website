export const getDevice = (state) =>
  state?.device || {
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  };
