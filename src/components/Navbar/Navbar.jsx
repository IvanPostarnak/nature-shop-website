import { memo, useCallback, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "app/routes/routes";
import IconWrap from "components/UI/IconWrap/IconWrap";
import ReactIcon from "components/icons/ReactIcon/ReactIcon";
import Span from "components/UI/Span/Span";
import { useDispatch } from "react-redux";
import { setActivePage } from "store/actions";

import styles from './Navbar.module.scss';
import underlined from './underlined.module.scss';

const Navbar = ({device, ...rest}) => {
  const [activePage, changeActivePage] = useState(() => PUBLIC_ROUTES[0].name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(activePage));
  }, [activePage]);

  const changePage = useCallback((value) => (value) => {
    changeActivePage(value);
  }, []);

  return (
    <nav
      className={styles.navbar}
      aria-label="navigation bar"
      data-testid="navbar"
      {...rest}
    >
      {
        PUBLIC_ROUTES.map((route) => {
          return (
            <Link
              className={`${styles.navbar_link} ${underlined.default} ${route.name == activePage && underlined.active}`}
              data-testid="navbar-link"
              to={route.path}
              key={route.key}
              onClick={changePage(route.name)}
            >
              <IconWrap>
                <ReactIcon size={20}/>
              </IconWrap>
              <Span>
                {route.name}
              </Span>
            </Link>
          )
        })
      }
    </nav>
  )
};

Navbar.propTypes = {
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired
};

export default memo(Navbar);