import {memo, useCallback, useEffect, useState} from 'react';
import AdaptiveRender from 'components/layout/AdaptiveRender/AdaptiveRender';
import Content from 'widgets/Content/Content.widget';
import Main from 'components/UI/Main/Main';
import Sidebar from 'widgets/Sidebar/Sidebar.widget';
import Header from 'components/UI/Header/Header';
import H2 from 'components/UI/H2/H2';
import {useFetch} from 'hooks/hooks';
import {PostsService} from 'services/services';
import {Link, useParams} from 'react-router-dom';
import Loader from 'components/UI/Loader/Loader';
import PostCredentials from 'components/PostCredentials/PostCredentials';
import {useDispatch, useSelector} from 'react-redux';
import {getDevice} from 'store/selectors';
import Article from 'components/UI/Article/Article';
import Image from 'components/UI/Image/Image';
import {setActivePost, setPostsLastVisited} from 'store/actions';

import styles from './SinglePost.module.scss';

const SinglePost = () => {
  const firstId = Number(useParams().id);
  const [id, setId] = useState(() => firstId);
  const device = useSelector(getDevice);
  const dispatch = useDispatch();
  const {isLoading, data} = useFetch(() => PostsService.getOneById(id), {
    deps: [id],
  });

  const changePage = useCallback(
    (newId) => () => {
      setId(newId);
    },
    [],
  );

  useEffect(() => {
    if (data) {
      dispatch(setActivePost(data));
      dispatch(setPostsLastVisited(data?.post_id));
    }
  }, [data]);

  return (
    <div
      className={styles.single_post}
      data-testid='single-post-page'
    >
      <AdaptiveRender>
        <Content>
          <Main>
            {isLoading || !data ? (
              <Loader />
            ) : (
              <Article>
                <Image
                  src={`/src/assets/images/posts/${data?.post_id}, ${data?.title}.webp`}
                  width='100%'
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
            )}
          </Main>
          <Link
            onClick={changePage(id - 1)}
            to={`/blog/posts/${id - 1}`}
          >
            {'<--- prev'}
          </Link>
          <Link
            onClick={changePage(id + 1)}
            to={`/blog/posts/${id + 1}`}
          >
            {'next --->'}
          </Link>
        </Content>
        <Sidebar />
      </AdaptiveRender>
    </div>
  );
};

export default memo(SinglePost);
