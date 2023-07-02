import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Text.module.scss';

const Text = ({
  children,
  ff="inherit",
  fz="inherit",
  fw="inherit",
  fs="inherit",
  c="#000000",
  cursor='initial',
  ...rest
}) => {
  return (
    <p
      {...rest}
      className={styles.text}
      data-testid="text"
      style={{
        fontFamily: ff,
        fontSize: fz,
        fontWeight: fw,
        fontStyle: fs,
        color: c,
        cursor: cursor
      }}
    >
      {typeof children === "string" ? children.trim() : ""}
    </p>
  )
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  ff: PropTypes.string,
  fz: PropTypes.string,
  fw: PropTypes.string,
  fs: PropTypes.string,
  c: PropTypes.string,
  cursor: PropTypes.string
};

export default memo(Text);