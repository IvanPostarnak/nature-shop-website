import { memo } from "react";
import { useFetch } from "hooks/hooks";
import PagesService from "services/PagesService/PagesService";
import Content from "widgets/Content/Content.widget";
import PropTypes from "prop-types";
import SingleStructure from "components/layout/SingleStructure/SingleStructure";
import Main from "components/Main/Main";
import H2 from "components/UI/H2/H2";
import Article from "components/Article/Article";
import Loader from "components/UI/Loader/Loader";

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const {isLoading, data, reset} = useFetch(() => PagesService.getAboutUs())

  return (
    <div
      data-testid="about-us-page"
      className={`${styles.aboutus}`}
    >
      <SingleStructure>
        <Content>
          <Main>
          <H2>{"About Us"}</H2>
            {
              isLoading
              ? <Loader/>
              : <Article>
                  {JSON.stringify(data)}
                </Article>
            }
          </Main>
        </Content>
      </SingleStructure>
    </div>
  )
};

AboutUs.propTypes = {

}

export default memo(AboutUs);