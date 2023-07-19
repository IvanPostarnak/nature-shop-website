import PropTypes from 'prop-types';
import {memo} from 'react';

import styles from './Shelf.module.scss';

const Shelf = ({children, layout = 'normal', ...rest}) => {
  return (
    <div
      className={`${styles.shelf} ${layout === 'bottom' ? styles.bottom : styles.normal}`}
      data-testid='app-shelf'
      {...rest}
    >
      {children}
    </div>
  );
};

Shelf.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  layout: PropTypes.oneOf(['normal', 'bottom']),
};

export default memo(Shelf);
