import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Column.module.css';

const Column = ({children, ...rest}) => {
  return (
    <div
      className={styles.column}
      data-testid='app-column'
      {...rest}
    >
      Column
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default memo(Column);
