import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './SingleStructure.module.scss';

const SingleStructure = ({children, ...rest}) => {
  return (
    <div
      className={styles.single_structure}
      data-testid="single-structure"
      {...rest}
    >
      {children}
    </div>
  )
};

SingleStructure.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
}

export default memo(SingleStructure);