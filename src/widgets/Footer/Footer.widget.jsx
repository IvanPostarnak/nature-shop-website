import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './Footer.module.scss';

const Footer = ({device}) => {
  return (
    <footer
      className={styles.footer}
      data-testid="app-footer"
    >
      Footer
    </footer>
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