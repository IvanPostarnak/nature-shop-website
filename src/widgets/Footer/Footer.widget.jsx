import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './Footer.module.scss';

const Footer = ({device}) => {
  return (
    <div
      className={styles.footer}
      data-testid="app-footer"
    >
      Footer
    </div>
  )
};

Footer.propTypes = {
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired
};

export default memo(Footer);