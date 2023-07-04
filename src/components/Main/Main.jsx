import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Main.module.scss';

const Main = ({children}) => {
  return (
    <main
      className={styles.main}
      data-testid="main"
    >
      {children}
    </main>
  )
};

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default memo(Main);