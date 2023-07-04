import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Loader.module.scss';

const Loader = ({children, z}) => {
  return (
    <div
      className={styles.loader}
      data-testid="loader"
      style={{
        zIndex: z || 9010
      }}
    >
      {children || 'Loading...'}
    </div>
  )
};

Loader.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string
  ]),
  z: PropTypes.number
}

export default memo(Loader);