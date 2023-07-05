import { memo } from "react";
import PropTypes from 'prop-types';

import styles from './Span.module.scss';

const Span = ({children, ff, fz, fw, fs, c, cursor, ...rest}) => {
  return (
    <span
      className={styles.span}
      data-testid="span"
      style={{
        fontFamily: ff || "inherit",
        fontSize: fz || "inherit",
        fontWeight: fw || "inherit",
        fontStyle: fs || "inherit",
        color: c || "#000000",
        cursor: cursor || 'inherit'
      }}
      {...rest}
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