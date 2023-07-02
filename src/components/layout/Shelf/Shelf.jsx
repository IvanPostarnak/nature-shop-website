import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './Shelf.module.scss';

const Shelf = ({device, children}) => {
  return (
    <div
      className={styles.shelf}
      data-testid="app-shelf"
    >
      {children}
    </div>
  )
};

Shelf.propTypes = {
  device: PropTypes.exact({
    children: PropTypes.element,
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired
};

export default memo(Shelf);