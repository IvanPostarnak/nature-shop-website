import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = ({children, ...rest}) => {
  return (
    <footer
      className={styles.footer}
      data-testid='footer'
      {...rest}
    >
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default memo(Footer);
