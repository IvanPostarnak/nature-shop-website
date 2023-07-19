import {memo} from 'react';
import PropTypes from 'prop-types';
import Aside from 'components/UI/Aside/Aside';

import styles from './Sidebar.module.css';

const Sidebar = ({children, ...rest}) => {
  return (
    <Aside
      className={styles.sidebar}
      data-testid='sidebar'
      {...rest}
    >
      {children}
    </Aside>
  );
};

Sidebar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default memo(Sidebar);
