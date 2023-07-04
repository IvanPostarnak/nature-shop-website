import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Sidebar.module.scss';

const Sidebar = ({children}) => {
  return (
    <aside
      className={styles.sidebar}
      data-testid="sidebar"
    >
      Sidebar
      {children}
    </aside>
  )
};

Sidebar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default memo(Sidebar);