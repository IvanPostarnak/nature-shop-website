import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Text.module.scss';

const Text = ({children, ff, fz, fw, fs, c, cursor, ...rest}) => {
  return (
    <p
      className={styles.text}
      data-testid='text'
      style={{
        fontFamily: ff || 'inherit',
        fontSize: fz || 'inherit',
        fontWeight: fw || 'inherit',
        fontStyle: fs || 'inherit',
        color: c || '#000000',
        cursor: cursor || 'initial',
      }}
      {...rest}
    >
      {typeof children === 'string' ? children.trim() : ''}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  ff: PropTypes.string,
  fz: PropTypes.string,
  fw: PropTypes.string,
  fs: PropTypes.string,
  c: PropTypes.string,
  cursor: PropTypes.string,
};

export default memo(Text);
