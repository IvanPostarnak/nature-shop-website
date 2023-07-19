import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Strong.module.css';

const Strong = ({children, ff, fz, fw, fs, c, cursor, ...rest}) => {
  return (
    <strong
      className={styles.strong}
      data-testid='strong'
      style={{
        fontFamily: ff || 'inherit',
        fontSize: fz || 'inherit',
        fontWeight: fw || 'inherit',
        fontStyle: fs || 'inherit',
        color: c || '#000000',
        cursor: cursor || 'inherit',
      }}
      {...rest}
    >
      {typeof children === 'string' ? children.trim() : ''}
    </strong>
  );
};

Strong.propTypes = {
  children: PropTypes.string.isRequired,
  ff: PropTypes.string,
  fz: PropTypes.string,
  fw: PropTypes.string,
  fs: PropTypes.string,
  c: PropTypes.string,
  cursor: PropTypes.string,
};

export default memo(Strong);
