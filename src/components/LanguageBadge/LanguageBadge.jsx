import { memo } from "react";
import PropTypes from 'prop-types';
import Text from "components/UI/Text/Text";
import Image from "components/UI/Image/Image";

import styles from './LanguageBadge.module.scss';

const LanguageBadge = ({children, device, langId, ...rest}) => {
  return (
    <div
      className={styles.language_badge}
      data-testid="language-badge"
      {...rest}
    >
      {children}
    </div>
  )
};

LanguageBadge.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOf([
      PropTypes.instanceOf(Image),
      PropTypes.instanceOf(Text)
    ]).isRequired
  ).isRequired,
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired,
  langId: PropTypes.number
};

export default memo(LanguageBadge);