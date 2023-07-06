import { memo } from "react";
import { useFetch } from "hooks/hooks";
import PostsService from "services/PostsService/PostsService";
import { useSelector } from "react-redux";
import { getDevice } from "store/selectors";
import Loader from "components/UI/Loader/Loader";
import Section from "components/UI/Section/Section";
import PostCard from "components/PostCard/PostCard";

import styles from './PostList.module.scss';

const PostList = () => {
  const device = useSelector(getDevice);
  const totalCount = useFetch(() => PostsService.getTotalCount());
  const {isLoading, data } = useFetch(() => PostsService.getAll(), {expect: "array"});

  return (
    <div
      className={styles.post_list}
      data-testid="post-list"
    >
      {
        totalCount.isLoading || !totalCount.data
        ? <Loader/>
        : totalCount.data.total_count
      }
      <Section>
        {
          isLoading || !data
          ? <Loader/>
          : data.map((post) => <PostCard data={post} device={device} key={post.post_id}/>)
        }
      </Section>
    </div>
  )
};

export default memo(PostList);