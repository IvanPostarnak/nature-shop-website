import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './AppHolder.module.scss';

const AppHolder = memo(({children}, device) => {
  return (
    <div className={styles.canvas}>
      <div
        className={`${styles.holder} ${device.isDesktop ? styles.desktop : device.isTablet ? styles.tablet : styles.mobile}`}
        data-testid="app-holder"
      >
        {children}
      </div>
    </div>
  )
});

AppHolder.propTypes = {
  children: PropTypes.element,
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired
};

export default AppHolder;