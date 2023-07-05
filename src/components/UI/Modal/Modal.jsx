import { memo } from "react";
import PropTypes from 'prop-types';
import { parseColorCode } from "helpers/parseColorCode/parseColorCode";

import styles from './Modal.module.scss';

const Modal = ({children, w, h, br, bc, bw, bs, bgc, bgo, events, z}) => {

  return (
    <div
      data-testid="modal"
      className={styles.modal}
      style={{
        width: w || '100%',
        heigh: h || '100%',
        border: `${bw || "0px"} ${bs || "solid"} ${bc || "inherit"}`,
        borderRadius: br || "0px",
        background: `rgba(${parseColorCode(bgc || 'ffffff')}, ${bgo || 1})`,
        zIndex: z || 9000,
        pointerEvents: events || "none"
      }}
    >
      {children}
    </div>
  )
};

Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  w: PropTypes.string,
  h: PropTypes.string,
  pos: PropTypes.string,
  br: PropTypes.string,
  bc: PropTypes.string,
  bw: PropTypes.string,
  bs: PropTypes.string,
  bgc: PropTypes.string,
  bgo: PropTypes.number,
  events: PropTypes.string,
  z: PropTypes.number
}

export default memo(Modal);