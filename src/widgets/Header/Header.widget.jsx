import { memo } from "react";
import PropTypes from 'prop-types';
import Navbar from "components/Navbar/Navbar";

import styles from './Header.module.scss';

const Header = ({device}) => {
  return (
    <header
      data-testid="app-header"
      className={styles.header}
    >
      <Navbar device={device}/>
    </header>
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