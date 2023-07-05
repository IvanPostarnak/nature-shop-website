import { memo } from "react";
import PropTypes from 'prop-types';
import { Children } from "react";

import styles from './SplitStructure.module.scss';

const SplitStructure = ({children}) => {
  return (
    <div
      className={styles.split_structure}
      data-testid="split-structure"
    >
      <div
        className={styles.first_item}
        data-testid="split-structure-first-item"
      >
        {Children.toArray(children)[0]}
      </div>
      <div
        className={styles.second_item}
        data-testid="split-structure-second-item"
      >
        {Children.toArray(children)[1]}
      </div>
    </div>
  )
};

SplitStructure.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default memo(SplitStructure);