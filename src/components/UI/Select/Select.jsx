import { memo } from "react";
import PropTypes from 'prop-types'

import styles from './Select.module.scss';

const Select = ({children, ...rest}) => {
  return (
    <select
      className={styles.select}
      data-testid="select"
      {...rest}
    >
      {children}
    </select>
  )
};

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default memo(Select);