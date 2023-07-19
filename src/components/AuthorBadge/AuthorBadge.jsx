import {memo} from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/UI/Avatar/Avatar';
import Name from 'components/UI/Name/Name';

import styles from './AuthorBadge.module.css';

const AuthorBadge = ({children, device, authorId, ...rest}) => {
  return (
    <div
      className={styles.author_badge}
      data-testid='author-badge'
      {...rest}
    >
      {children}
    </div>
  );
};

AuthorBadge.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOf([PropTypes.instanceOf(Avatar), PropTypes.instanceOf(Name)]).isRequired,
  ).isRequired,
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired,
  }).isRequired,
  authorId: PropTypes.number,
};

export default memo(AuthorBadge);
