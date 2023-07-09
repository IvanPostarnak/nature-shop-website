import { memo } from "react";
import { useFetch } from "hooks/hooks";
import PagesService from "services/PagesService/PagesService";
import Content from "widgets/Content/Content.widget";
import Main from "components/UI/Main/Main";
import H2 from "components/UI/H2/H2";
import Article from "components/UI/Article/Article";
import Loader from "components/UI/Loader/Loader";
import AdaptiveRender from "components/layout/AdaptiveRender/AdaptiveRender";
import Paragraph from "components/Paragraph/Paragraph";
import List from "components/List/List";
import ListItem from "components/UI/ListItem/ListItem";
import Header from "components/UI/Header/Header";

import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  const {isLoading, data} = useFetch(() => PagesService.getPrivacyPolicy());

  return (
    <div
      data-testid="privacy-policy-page"
      className={styles.privacy_policy}
    >
      <AdaptiveRender>
        <Content>
          <Main>
            {
              isLoading || !data
              ? <Loader/>
              : <Article>
                  <Header>
                    <H2>{"Privacy Policy"}</H2>
                  </Header>
                  <Paragraph body={data?.introduction}/>
                  <List type="unordered" title={"Personal Information"}>
                    <ListItem title="Collection" body={data?.personal_info?.collection}/>
                    <ListItem title="Use" body={data?.personal_info?.use}/>
                    <ListItem title="Disclosure" body={data?.personal_info?.disclosure}/>
                  </List>
                  <Paragraph title="Security Measures" body={data?.security_measures}/>
                  <Paragraph title="Changes" body={data?.changes}/>
                  <Paragraph title="Afterwords" body={data?.afterword}/>
                </Article>
            }
          </Main>
        </Content>
      </AdaptiveRender>
    </div>
  )
};

export default memo(PrivacyPolicy);