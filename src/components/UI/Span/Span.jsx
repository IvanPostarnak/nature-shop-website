import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Span.module.scss';

const Span = ({
  children,
  ff="inherit",
  fz="inherit",
  fw="inherit",
  fs="inherit",
  c="#000000",
  cursor='inherit',
  ...rest
}) => {
  return (
    <span
      {...rest}
      className={styles.span}
      data-testid="span"
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
    </span>
  )
};

Span.propTypes = {
  children: PropTypes.string.isRequired,
  ff: PropTypes.string,
  fz: PropTypes.string,
  fw: PropTypes.string,
  fs: PropTypes.string,
  c: PropTypes.string,
  cursor: PropTypes.string
};

export default memo(Span);