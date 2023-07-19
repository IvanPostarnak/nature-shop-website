import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './H5.module.css';

const H5 = ({children, ...rest}) => {
  return (
    <h5
      className={styles.h5}
      data-testid='h5'
      {...rest}
    >
      {children}
    </h5>
  );
};

H5.propTypes = {
  children: PropTypes.string.isRequired,
};

export default memo(H5);
