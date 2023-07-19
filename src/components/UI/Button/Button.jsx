import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({children, ...rest}) => {
  return (
    <button
      className={styles.button}
      data-testid='button'
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default memo(Button);
