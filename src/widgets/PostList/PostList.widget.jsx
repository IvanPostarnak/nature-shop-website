import { memo, useCallback } from "react";
import PostsService from "services/PostsService/PostsService";
import { useSelector } from "react-redux";
import { getDevice, getPostsAmount, getPostsLastActivePage } from "store/selectors";
import { setPostsLastActivePage } from "store/actions";
import Loader from "components/UI/Loader/Loader";
import Section from "components/UI/Section/Section";
import PostCard from "components/PostCard/PostCard";
import Pagination from "components/Pagination/Pagination";
import { usePagination } from "hooks/hooks";
import { useDispatch } from "react-redux";

import styles from './PostList.module.scss';

const PostList = () => {
  const device = useSelector(getDevice);
  const postsAmount = useSelector(getPostsAmount);
  const lastActivePage = useSelector(getPostsLastActivePage);
  const {step, setStart, isLoading, data, headers} = usePagination(PostsService.getOnePage.bind(PostsService));
  const dispatch = useDispatch();

  const handleChange = useCallback((pageId, newStart) => {
    dispatch(setPostsLastActivePage(pageId));
    setStart(newStart);
  }, []);

  return (
    <div
      className={styles.post_list}
      data-testid="post-list"
    >
      {
        !headers
        ? <Loader/>
        : `Presented ${headers['x-current-amount']} out of ${postsAmount.value}`
      }
      <Section>
        {
          isLoading || !data
          ? <Loader/>
          : data.map((post) => {
              return (
                <PostCard
                  data={post}
                  device={device}
                  key={post.post_id}
                />
              )
            })
        }
      </Section>
      {
        !headers
        ? <Loader/>
        : <Pagination
            device={device}
            totalAmount={postsAmount.value}
            step={step}
            active={lastActivePage}
            onChangePage={handleChange}
          />
      }
    </div>
  )
};

export default memo(PostList);