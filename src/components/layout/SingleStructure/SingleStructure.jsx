import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './SingleStructure.module.scss';

const SingleStructure = ({children}) => {
  return (
    <aside
      className={styles.single_structure}
      data-testid="single-structure"
    >
      {children}
    </aside>
  )
};

SingleStructure.propTypes = {
  children: PropTypes.element
}

export default memo(SingleStructure);