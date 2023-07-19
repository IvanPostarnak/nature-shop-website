import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({children, ...rest}) => {
  return (
    <section
      className={styles.section}
      data-testid='section'
      {...rest}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default memo(Section);
