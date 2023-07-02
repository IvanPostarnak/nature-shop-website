import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './Shelf.module.scss';

const Shelf = ({children, layout="normal"}) => {
  return (
    <div
      className={`${styles.shelf} ${layout === "bottom" ? styles.bottom : styles.normal}`}
      data-testid="app-shelf"
    >
      {children}
    </div>
  )
};

Shelf.propTypes = {
  children: PropTypes.element
};

export default memo(Shelf);