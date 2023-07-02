import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = (device) => {
  return (
    <div
      data-testid="app-header"
      className={styles.header}
    >
      Header
    </div>
  )
}

Header.propTypes = {
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired
};

export default memo(Header);