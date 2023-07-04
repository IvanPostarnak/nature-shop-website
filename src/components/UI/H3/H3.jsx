import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './H3.module.scss';

const H3 = ({children, ...rest}) => {
  return (
    <h3
      className={styles.h3}
      data-testid="h3"
      {...rest}
    >
      {children}
    </h3>
  )
};

H3.propTypes = {
  children: PropTypes.string
}

export default memo(H3);