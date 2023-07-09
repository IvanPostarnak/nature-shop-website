import { memo } from "react";
import Section from "components/UI/Section/Section";
import PostCard from "components/PostCard/PostCard";
import PropTypes from 'prop-types';

import styles from './PostList.module.scss';

const PostList = ({data, device, ...rest}) => {
  return (
    <div
      className={styles.post_list}
      data-testid="post-list"
      {...rest}
    >
      <Section>
        {
          data
          && data.map((post) => {
              return (
                <PostCard
                  data={post}
                  device={device}
                  key={post.post_id}
                />
              )
            })
        }
      </Section>
    </div>
  )
};

PostList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired
};

export default memo(PostList);