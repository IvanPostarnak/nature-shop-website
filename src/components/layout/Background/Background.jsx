import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Background.module.css';

const Background = ({children, ...rest}) => {
  return (
    <div
      className={styles.background}
      data-testid='app-background'
      {...rest}
    >
      {children}
    </div>
  );
};

Background.propType = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default memo(Background);
