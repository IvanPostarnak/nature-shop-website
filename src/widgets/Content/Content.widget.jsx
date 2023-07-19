import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Content.module.css';

const Content = ({children}) => {
  return (
    <div
      className={styles.content}
      data-testid='content'
    >
      Content
      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default memo(Content);
