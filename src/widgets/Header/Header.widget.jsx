import {memo} from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar/Navbar';
import Header from 'components/UI/Header/Header';

import styles from './Header.module.scss';

const HeaderWidget = ({device, ...rest}) => {
  return (
    <div
      data-testid='header-widget'
      className={styles.header_widget}
    >
      <Header {...rest}>
        <Navbar device={device} />
      </Header>
    </div>
  );
};

HeaderWidget.propTypes = {
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired,
  }).isRequired,
};

export default memo(HeaderWidget);
