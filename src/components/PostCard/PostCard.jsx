import { Children, memo, useMemo } from "react";
import PropTypes from 'prop-types'
import H4 from "components/UI/H4/H4";
import Text from "components/UI/Text/Text";
import Image from "components/UI/Image/Image";
import { Link } from "react-router-dom";
import AuthorBadge from "components/AuthorBadge/AuthorBadge";
import LanguageBadge from "components/LanguageBadge/LanguageBadge";

import styles from './PostCard.module.scss';

const PostCard = ({children, device, id, title, description}) => {
  const components = useMemo(() => Children.toArray(children), [children]);
  
  return (
    <div
      className={styles.post_card}
      data-testid="post-card"
    >
      <Link to={`/blog/posts/${id}`}>
        {components[0]}
        {title && <H4>{title}</H4>}
        {description && <Text>{description}</Text>}
      </Link>
      {components[1]}
      {components[2]}
    </div>
  )
};

PostCard.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOf([
      PropTypes.instanceOf(Image),
      PropTypes.instanceOf(AuthorBadge),
      PropTypes.instanceOf(LanguageBadge)
    ])
  ).isRequired,
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTable: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default memo(PostCard);