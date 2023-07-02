import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Column.module.scss';

const Column = ({children, device}) => {
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
  device: PropTypes.exact({
    children: PropTypes.element,
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired
};

export default memo(Column);