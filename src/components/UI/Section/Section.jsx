import { memo } from "react";
import PropTypes from 'prop-types'

import styles from './Section.module.scss';

const Section = ({children, ...rest}) => {
  return (
    <section
      className={styles.section}
      data-testid="section"
      {...rest}
    >
      {children}
    </section>
  )
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default memo(Section);