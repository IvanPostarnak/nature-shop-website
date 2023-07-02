import { memo } from "react";
import PropTypes from "prop-types";

import styles from './Background.module.scss';

const Background = ({children}) => {
  return (
    <div
      className={styles.background}
      data-testid="app-background"
    >
      {children}
    </div>
  )
};

Background.propType = {
  children: PropTypes.element
};

export default memo(Background);