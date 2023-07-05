import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './H4.module.scss';

const H4 = ({children, ...rest}) => {
  return (
    <h4
      className={styles.h4}
      data-testid="h4"
      {...rest}
    >
      {children}
    </h4>
  )
};

H4.propTypes = {
  children: PropTypes.string.isRequired
}

export default memo(H4);