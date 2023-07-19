import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

const Header = ({children, ...rest}) => {
  return (
    <header
      className={styles.header}
      data-testid='header'
      {...rest}
    >
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default memo(Header);
