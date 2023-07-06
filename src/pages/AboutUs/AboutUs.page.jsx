import { memo } from "react";
import { useFetch } from "hooks/hooks";
import PagesService from "services/PagesService/PagesService";
import Content from "widgets/Content/Content.widget";
import Main from "components/UI/Main/Main";
import H2 from "components/UI/H2/H2";
import Article from "components/Article/Article";
import Loader from "components/UI/Loader/Loader";
import AdaptiveRender from "components/layout/AdaptiveRender/AdaptiveRender";
import Paragraph from "components/Paragraph/Paragraph";
import Header from "components/UI/Header/Header";

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const {isLoading, data } = useFetch(() => PagesService.getAboutUs());

  return (
    <div
      data-testid="about-us-page"
      className={styles.about_us}
    >
      <AdaptiveRender>
        <Content>
          <Main>
            <Header>
              <H2>{"About Us"}</H2>
            </Header>
            {
              isLoading || !data
              ? <Loader/>
              : <Article>
                  <Paragraph body={data?.introduction}/>
                  <Paragraph title="Vision" body={data?.vision}/>
                  <Paragraph title="Mission" body={data?.mission}/>
                  <Paragraph title="Why Us?" body={data?.why_us}/>
                  <Paragraph title="Thanks" body={data?.thanks}/>
                  <Paragraph title="Afterwords" body={data?.afterword}/>
                </Article>
            }
          </Main>
        </Content>
      </AdaptiveRender>
    </div>
  )
};

export default memo(AboutUs);