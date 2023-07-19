import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Aside.module.scss';

const Aside = ({children, ...rest}) => {
  return (
    <aside
      className={styles.aside}
      data-testid='aside'
      {...rest}
    >
      {children}
    </aside>
  );
};

Aside.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default memo(Aside);
