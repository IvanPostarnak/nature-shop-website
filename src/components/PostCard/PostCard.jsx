import { memo } from "react";
import PropTypes from 'prop-types'
import H4 from "components/UI/H4/H4";
import Text from "components/UI/Text/Text";
import Image from "components/UI/Image/Image";
import { Link } from "react-router-dom";
import AuthorBadge from "components/AuthorBadge/AuthorBadge";
import LanguageBadge from "components/LanguageBadge/LanguageBadge";
import Avatar from "components/UI/Avatar/Avatar";
import Name from "components/UI/Name/Name";
import VisitedBadge from "components/VisitedBadge/VisitedBadge";
import IconWrap from "components/UI/IconWrap/IconWrap";
import EyeIcon from "components/icons/EyeIcon/EyeIcon";
import RatingBadge from "components/RatingBadge/RatingBadge";
import AccurateRating from "components/AccurateRating/AccurateRating";
import TimeAgoBadge from "components/TimeAgoBadge/TimeAgoBadge";

import styles from './PostCard.module.scss';

const PostCard = ({data, device, ...rest}) => {
  return (
    <div
      className={styles.post_card}
      data-testid="post-card"
      {...rest}
    >
      <Link to={`/blog/posts/${data?.post_id}`}>
        <Image
          src="/src/assets/images/post-placeholder-480-320.jpg"
          width="280"
        />
        {data?.title && <H4>{data?.title}</H4>}
        {data?.content && <Text>{data?.content}</Text>}
      </Link>
      <AuthorBadge
        device={device}
        authorId={data?.author?.employee_id}
      >
        <Avatar
          src="/src/assets/images/avatar-placeholder.jpg"
          size={32}
        />
        <Name
          first={data?.author?.first_name}
          last={data?.author?.last_name}
        />
      </AuthorBadge>
      <LanguageBadge
        device={device}
        langId={data?.language?.language_id}
      >
        <Image
          src="/src/assets/images/usa-flag.png"
          width={28}
        />
        <Text>{data?.language?.name}</Text>
      </LanguageBadge>
      <VisitedBadge
        device={device}
      >
        <IconWrap>
          <EyeIcon/>
        </IconWrap>
        <Text>{data?.visited_total}</Text>
      </VisitedBadge>
      <RatingBadge
        device={device}
        votes={data?.votes_count}
      >
        <AccurateRating value={data?.rating}/>
      </RatingBadge>
      <TimeAgoBadge
        device={device}
        created={data?.created}
        edited={data?.created}
      >
        <IconWrap>
          <EyeIcon />
        </IconWrap>
      </TimeAgoBadge>
    </div>
  )
};

PostCard.propTypes = {
  data: PropTypes.object.isRequired,
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired
};

export default memo(PostCard);