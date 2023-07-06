import { memo } from "react";
import PropTypes from 'prop-types'
import Image from "components/UI/Image/Image";

import styles from './Avatar.module.scss';

const Avatar = ({size, ...rest}) => {
  return (
    <Image
      className={styles.avatar}
      data-testid="avatar"
      {...rest}
      width={size}
      height={size}
    />
  )
};

Avatar.propTypes = {
  size: PropTypes.number.isRequired
};

export default memo(Avatar);