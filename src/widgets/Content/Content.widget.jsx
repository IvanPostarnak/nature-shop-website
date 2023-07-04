import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Content.module.scss';

const Content = ({children}) => {
  return (
    <div
      className={styles.content}
      data-testid="content"
    >
      Content
      {children}
    </div>
  )
};

Content.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default memo(Content);