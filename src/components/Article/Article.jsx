import { memo } from "react";
import PropTypes from 'prop-types';
import H3 from "components/UI/H3/H3";
import Header from "components/UI/Header/Header";

import styles from './Article.module.scss';

const Article = ({children, title, ...rest}) => {
  return (
    <article
      className={styles.article}
      data-testid="article"
      {...rest}
    >
      <Header
        className={styles.article__header}
        data-testid="article-header"
      >
        {
          title && <H3>{title}</H3>
        }
      </Header>
      {children}
    </article>
  )
};

Article.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  title: PropTypes.string
}

export default memo(Article);