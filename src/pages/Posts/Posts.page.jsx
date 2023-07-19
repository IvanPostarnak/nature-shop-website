import {memo, useDeferredValue} from 'react';
import AdaptiveRender from 'components/layout/AdaptiveRender/AdaptiveRender';
import Content from 'widgets/Content/Content.widget';
import Main from 'components/UI/Main/Main';
import Sidebar from 'widgets/Sidebar/Sidebar.widget';
import Header from 'components/UI/Header/Header';
import PostList from 'widgets/PostList/PostList.widget';
import H2 from 'components/UI/H2/H2';
import Pagination from 'widgets/Pagination/Pagination.widget';
import {useSelector} from 'react-redux';
import {useDebounce, useFilter, usePagination} from 'hooks/hooks';
import {PostsService} from 'services/services';
import Loader from 'components/UI/Loader/Loader';
import PostFilter from 'widgets/PostFilter/PostFilter.widget';
import {
  getDevice,
  getPostsAmount,
  getPostsFilterLanguageId,
  getPostsFilterSearchQuery,
  getPostsLastActivePage,
} from 'store/selectors';

import styles from './Posts.module.css';

const Posts = () => {
  const device = useSelector(getDevice);
  const lastActivePage = useSelector(getPostsLastActivePage);
  const postsAmount = useSelector(getPostsAmount);
  const searchQuery = useSelector(getPostsFilterSearchQuery);
  const filterLanguageId = useSelector(getPostsFilterLanguageId);

  const {isLoading, data, headers} = useDebounce(() => PostsService.getBySearchQuery(searchQuery), {
    delay: 1000,
    deps: [searchQuery],
  });
  const filteredData = useFilter(
    data || [],
    (post) => post.language.language_id == filterLanguageId,
    [filterLanguageId],
  );
  const deferredData = useDeferredValue(filteredData);
  const {step, onChangePage, singlePageData} = usePagination(deferredData);

  return (
    <div
      className={styles.posts}
      data-testid='posts-page'
    >
      <AdaptiveRender>
        <Content>
          <Main>
            <Header>
              <H2>{`Posts`}</H2>
              {!headers ? (
                <Loader />
              ) : (
                `Presented ${headers?.['x-current-amount'] || postsAmount.value} out of ${
                  postsAmount?.value
                }`
              )}
            </Header>
            {isLoading || !singlePageData ? (
              <Loader />
            ) : (
              <PostList
                data={singlePageData}
                device={device}
              />
            )}
            <Pagination
              device={device}
              totalAmount={headers?.['x-current-amount'] || postsAmount?.value}
              step={step}
              active={lastActivePage}
              onChangePage={onChangePage}
            />
          </Main>
        </Content>
        <Sidebar>
          {'Filter'}
          <PostFilter />
        </Sidebar>
      </AdaptiveRender>
    </div>
  );
};

export default memo(Posts);
