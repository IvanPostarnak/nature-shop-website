import { memo, useCallback } from "react";
import AdaptiveRender from "components/layout/AdaptiveRender/AdaptiveRender";
import Content from "widgets/Content/Content.widget";
import Main from "components/UI/Main/Main";
import Sidebar from "widgets/Sidebar/Sidebar.widget";
import Header from "components/UI/Header/Header";
import PostList from "widgets/PostList/PostList.widget";
import H2 from "components/UI/H2/H2";
import Pagination from "components/Pagination/Pagination";
import { useSelector } from "react-redux";
import { getDevice, getPostsAmount, getPostsLastActivePage } from "store/selectors";
import { usePagination } from "hooks/hooks";
import { useDispatch } from "react-redux";
import PostsService from "services/PostsService/PostsService";
import { setPostsLastActivePage } from "store/actions";
import Loader from "components/UI/Loader/Loader";

import styles from './Posts.module.scss';

const Posts = () => {
  const device = useSelector(getDevice);
  const lastActivePage = useSelector(getPostsLastActivePage);
  const postsAmount = useSelector(getPostsAmount);
  const {step, setStart, isLoading, data, headers} = usePagination(PostsService.getOnePage.bind(PostsService));
  const dispatch = useDispatch();

  const handleChange = useCallback((pageId, newStart) => {
    dispatch(setPostsLastActivePage(pageId));
    setStart(newStart);
  }, []);

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
              {
                !headers
                ? <Loader/>
                : `Presented ${headers['x-current-amount']} out of ${postsAmount.value}`
              }
            </Header>
            {
              isLoading || !data
              ? <Loader/>
              : <PostList
                  data={data}
                  device={device}
                />
            }
            <Pagination
              device={device}
              totalAmount={postsAmount.value}
              step={step}
              active={lastActivePage}
              onChangePage={handleChange}
            />
          </Main>
        </Content>
        <Sidebar/>
      </AdaptiveRender>
    </div>
  )
};

export default memo(Posts);