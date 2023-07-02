import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Column.module.scss';

const Column = ({children}) => {
  return (
    <div
      className={styles.column}
      data-testid="app-column"
    >
      Column
      {children}
    </div>
  )
};

Column.propTypes = {
  children: PropTypes.element
};

export default memo(Column);