import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './H2.module.css';

const H2 = ({children, ...rest}) => {
  return (
    <h2
      className={styles.h2}
      data-testid='h2'
      {...rest}
    >
      {children}
    </h2>
  );
};

H2.propTypes = {
  children: PropTypes.string.isRequired,
};

export default memo(H2);
