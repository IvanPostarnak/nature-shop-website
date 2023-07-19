import {memo} from 'react';
import PropTypes from 'prop-types';
import Text from 'components/UI/Text/Text';
import AccurateRating from 'components/AccurateRating/AccurateRating';

import styles from './RatingBadge.module.scss';

const RatingBadge = ({children, device, votes, ...rest}) => {
  return (
    <div
      className={styles.rating_badge}
      data-testid='rating-badge'
      {...rest}
    >
      {children}
      <Text>{`${votes}`}</Text>
    </div>
  );
};

RatingBadge.propTypes = {
  children: PropTypes.oneOf([PropTypes.instanceOf(AccurateRating)]).isRequired,
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired,
  }).isRequired,
  votes: PropTypes.number,
};

export default memo(RatingBadge);
