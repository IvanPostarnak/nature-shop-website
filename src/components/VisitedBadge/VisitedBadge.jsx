import {memo} from 'react';
import PropTypes from 'prop-types';
import IconWrap from 'components/UI/IconWrap/IconWrap';
import Text from 'components/UI/Text/Text';

import styles from './VisitedBadge.module.css';

const VisitedBadge = ({children, device, ...rest}) => {
  return (
    <div
      className={styles.visited_badge}
      data-testid='visited-badge'
      {...rest}
    >
      {children}
    </div>
  );
};

VisitedBadge.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOf([PropTypes.instanceOf(IconWrap), PropTypes.instanceOf(Text)]).isRequired,
  ).isRequired,
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired,
  }).isRequired,
};

export default memo(VisitedBadge);
