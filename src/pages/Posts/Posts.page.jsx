import { memo, useCallback, useDeferredValue, useMemo } from "react";
import AdaptiveRender from "components/layout/AdaptiveRender/AdaptiveRender";
import Content from "widgets/Content/Content.widget";
import Main from "components/UI/Main/Main";
import Sidebar from "widgets/Sidebar/Sidebar.widget";
import Header from "components/UI/Header/Header";
import PostList from "widgets/PostList/PostList.widget";
import H2 from "components/UI/H2/H2";
import Pagination from "widgets/Pagination/Pagination.widget";
import { useSelector } from "react-redux";
import { usePagination } from "hooks/hooks";
import { useDispatch } from "react-redux";
import { PostsService } from "services/services";
import { setPostsLastActivePage } from "store/actions";
import Loader from "components/UI/Loader/Loader";
import PostFilter from "widgets/PostFilter/PostFilter.widget";
import {
  getDevice,
  getPostsAmount,
  getPostsFilterSearchQuery,
  getPostsLastActivePage
} from "store/selectors";

import styles from './Posts.module.scss';

const Posts = () => {
  const device = useSelector(getDevice);
  const lastActivePage = useSelector(getPostsLastActivePage);
  const postsAmount = useSelector(getPostsAmount);
  const searchQuery = useSelector(getPostsFilterSearchQuery);
  const {step, setStart, isLoading, data, headers} = usePagination(PostsService.getOnePage.bind(PostsService));
  const dispatch = useDispatch();

  const filteredData = useMemo(() => {
    if (!data) return;
    return data.filter((post) => {
      return post.content.includes(searchQuery)
    });
  }, [data, searchQuery]);

  const deferred = useDeferredValue(filteredData);

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
              isLoading || !deferred
              ? <Loader/>
              : <PostList
                  data={deferred}
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
        <Sidebar>
          {'Filter'}
          <PostFilter/>
        </Sidebar>
      </AdaptiveRender>
    </div>
  )
};

export default memo(Posts);