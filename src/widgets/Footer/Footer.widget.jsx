import PropTypes from 'prop-types';
import {memo} from 'react';
import Footer from 'components/UI/Footer/Footer';

import styles from './Footer.module.scss';

const FooterWidget = ({device, ...rest}) => {
  return (
    <div
      className={styles.footer_widget}
      data-testid='footer-widget'
    >
      <Footer {...rest}>Footer</Footer>
    </div>
  );
};

FooterWidget.propTypes = {
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired,
  }).isRequired,
};

export default memo(FooterWidget);
