import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Article.module.scss';

const Article = ({children, ...rest}) => {
  return (
    <article
      className={styles.article}
      data-testid="article"
      {...rest}
    >
      {children}
    </article>
  )
};

Article.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired
}

export default memo(Article);