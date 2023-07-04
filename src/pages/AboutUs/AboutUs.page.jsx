import { memo } from "react";
import { useFetch } from "hooks/hooks";
import PagesService from "services/PagesService/PagesService";
import PropTypes from "prop-types";

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const {isLoading, data, reset} = useFetch(() => PagesService.getAboutUs())

  return (
    <div
      data-testid="about-us-page"
      className={`${styles.aboutus}`}
    >
      {isLoading ? 'loading' : JSON.stringify(data)}
      <button onClick={reset}> reset </button>
    </div>
  )
};

AboutUs.propTypes = {

}

export default memo(AboutUs);