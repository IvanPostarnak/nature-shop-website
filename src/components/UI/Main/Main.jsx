import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Main.module.scss';

const Main = ({children, ...rest}) => {
  return (
    <main
      className={styles.main}
      data-testid="main"
      {...rest}
    >
      {children}
    </main>
  )
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired
};

export default memo(Main);