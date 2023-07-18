import { memo } from "react";
import PropTypes from 'prop-types'

import styles from './Option.module.scss';

const Option = ({children, ...rest}) => {
  return (
    <option
      className={styles.option}
      data-testid="option"
      {...rest}
    >
      {children}
    </option>
  )
};

Option.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default memo(Option);