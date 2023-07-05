import { memo } from "react";
import PropTypes from 'prop-types'
import AdaptiveRender from "components/layout/AdaptiveRender/AdaptiveRender";
import Content from "widgets/Content/Content.widget";
import Main from "components/UI/Main/Main";
import Sidebar from "widgets/Sidebar/Sidebar.widget";
import Section from "components/UI/Section/Section";
import H2 from "components/UI/H2/H2";

import styles from './Posts.module.scss';
import PostCard from "components/PostCard/PostCard";
import Text from "components/UI/Text/Text";

const Posts = () => {
  return (
    <div
      className={styles.posts}
      data-testid="posts-page"
    >
      <AdaptiveRender>
        <Content>
          <Main>
            <H2>{"Posts"}</H2>
            <Section>
              <PostCard>
                <Text>{"Post Card"}</Text>
              </PostCard>
            </Section>
          </Main>
        </Content>
        <Sidebar/>
      </AdaptiveRender>
    </div>
  )
};

Posts.propTypes = {

};

export default memo(Posts);