import { memo } from "react";
import AdaptiveRender from "components/layout/AdaptiveRender/AdaptiveRender";
import Content from "widgets/Content/Content.widget";
import Main from "components/UI/Main/Main";
import Sidebar from "widgets/Sidebar/Sidebar.widget";
import Header from "components/UI/Header/Header";
import H2 from "components/UI/H2/H2";
import { useFetch } from "hooks/hooks";
import PostsService from "services/PostsService/PostsService";
import { useParams } from "react-router-dom";
import Loader from "components/UI/Loader/Loader";
import PostCredentials from "components/PostCredentials/PostCredentials";
import { useSelector } from "react-redux";
import { getDevice } from "store/selectors";
import Article from "components/Article/Article";
import Image from "components/UI/Image/Image";

import styles from './SinglePost.module.scss';

const SinglePost = () => {
  const {id} = useParams();
  const device = useSelector(getDevice);
  const {isLoading, data} = useFetch(() => PostsService.getOneById(id));

  return (
    <div
      className={styles.single_post}
      data-testid="single-post-page"
    >
      <AdaptiveRender>
        <Content>
          <Main>
            {
              isLoading || !data
              ? <Loader/>
              : (
                  <Article>
                    <Image
                      src="/src/assets/images/post-placeholder-480-320.jpg"
                      width="100%"
                    />
                    <Header>
                      <H2>{data.title}</H2>
                      <PostCredentials
                        device={device}
                        data={data}
                      />
                    </Header>
                    {data?.content}
                  </Article>
                )
            }
          </Main>
        </Content>
        <Sidebar/>
      </AdaptiveRender>
    </div>
  )
};

export default memo(SinglePost);