import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Nav.module.scss';

const Nav = ({children, ...rest}) => {
  return (
    <nav
      className={styles.nav}
      data-testid='nav'
      {...rest}
    >
      {children}
    </nav>
  );
};

Nav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default memo(Nav);
