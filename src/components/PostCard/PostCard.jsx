import { memo } from "react";
import PropTypes from 'prop-types'

import styles from './PostCard.module.scss';

const PostCard = ({children}) => {
  return (
    <div
      className={styles.post_card}
      data-testid="post-card"
    >
      {children}
    </div>
  )
};

PostCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default memo(PostCard);