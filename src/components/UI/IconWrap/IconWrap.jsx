import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './IconWrap.module.scss';

const IconWrap = ({children, animation, ...rest}) => {
  return (
    <div
      className={styles.icon_wrap}
      data-testid="icon-wrap"
      {...rest}
    >
      {children}
    </div>
  )
};

IconWrap.propTypes = {
  size: PropTypes.element
};

export default memo(IconWrap);