import {memo} from 'react';
import PropTypes from 'prop-types';
import H4 from 'components/UI/H4/H4';
import Text from 'components/UI/Text/Text';
import Image from 'components/UI/Image/Image';
import {Link} from 'react-router-dom';
import PostCredentials from 'components/PostCredentials/PostCredentials';

import styles from './PostCard.module.css';

const PostCard = ({device, data, ...rest}) => {
  return (
    <div
      className={styles.post_card}
      data-testid='post-card'
      {...rest}
    >
      <Link to={`/blog/posts/${data?.post_id}`}>
        <Image
          src={`/src/assets/images/posts/${data?.post_id}, ${data?.title}.webp`}
          width='280'
        />
        {data?.title && <H4>{data?.title}</H4>}
        {data?.content && <Text>{data?.content}</Text>}
      </Link>
      <PostCredentials
        device={device}
        data={data}
      />
    </div>
  );
};

PostCard.propTypes = {
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export default memo(PostCard);
