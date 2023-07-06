import { memo } from "react";
import AdaptiveRender from "components/layout/AdaptiveRender/AdaptiveRender";
import Content from "widgets/Content/Content.widget";
import Main from "components/UI/Main/Main";
import Sidebar from "widgets/Sidebar/Sidebar.widget";
import Header from "components/UI/Header/Header";
import PostList from "widgets/PostList/PostList.widget";

import H2 from "components/UI/H2/H2";

import styles from './Posts.module.scss';

const Posts = () => {
  return (
    <div
      className={styles.posts}
      data-testid="posts-page"
    >
      <AdaptiveRender>
        <Content>
          <Main>
            <Header>
              <H2>{`Posts`}</H2>
            </Header>
            <PostList/>
          </Main>
        </Content>
        <Sidebar/>
      </AdaptiveRender>
    </div>
  )
};

export default memo(Posts);