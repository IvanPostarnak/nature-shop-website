import { memo, useCallback, useState } from "react";
import PropTypes from 'prop-types';
import Navbar from "components/Navbar/Navbar";

import styles from './Header.module.scss';

const Header = ({device}) => {
  const [page, setPage] = useState('Home');

  const changePage = useCallback((page) => {
    setPage(page);
  }, []);

  return (
    <div
      data-testid="app-header"
      className={styles.header}
    >
      <Navbar device={device} activePage={page} changePage={changePage}/>
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