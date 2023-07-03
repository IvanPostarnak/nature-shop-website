import { memo } from "react";
import PropTypes from "prop-types";

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div
      data-testid="about-us-page"
      className={`${styles.aboutus}`}
    >
      About Us
    </div>
  )
};

AboutUs.propTypes = {

}

export default memo(AboutUs);