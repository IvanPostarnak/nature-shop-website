import { memo } from "react";
import PropTypes from 'prop-types';
import Text from "components/UI/Text/Text";
import IconWrap from "components/UI/IconWrap/IconWrap";
import { getTimeAgo } from "helpers/getTimeAgo/getTimeAgo";

import styles from './TimeAgoBadge.module.scss';

const TimeAgoBadge = ({children, device, created, edited, ...rest}) => {
  return (
    <div
      className={styles.time_ago_badge}
      data-testid="time-ago-badge"
      {...rest}
    >
      {children}
      {created && <Text>{`Created: ${getTimeAgo(created)}`}</Text>}
      {edited && <Text>{`Edited: ${getTimeAgo(edited)}`}</Text>}      
    </div>
  )
};

TimeAgoBadge.propTypes = {
  children: PropTypes.oneOf([
      PropTypes.instanceOf(IconWrap),
  ]).isRequired,
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired,
  created: PropTypes.string,
  edited: PropTypes.string,
};

export default memo(TimeAgoBadge);