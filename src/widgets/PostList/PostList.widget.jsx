import { memo, useEffect, useState } from "react";
import { useFetch } from "hooks/hooks";
import PostsService from "services/PostsService/PostsService";
import { useSelector } from "react-redux";
import { getDevice } from "store/selectors";
import Loader from "components/UI/Loader/Loader";
import Section from "components/UI/Section/Section";
import PostCard from "components/PostCard/PostCard";

import styles from './PostList.module.scss';

const PostList = () => {
  const [start, setStart] = useState(0);
  const [howMuch, setHowMuch] = useState(10);

  const device = useSelector(getDevice);
  const {isLoading, data, headers, reset} = useFetch(() => PostsService.getOnePage(start, howMuch), {expect: "array"});

  useEffect(() => {
    !isLoading && reset();
  }, [start, howMuch]);

  return (
    <div
      className={styles.post_list}
      data-testid="post-list"
    >
      {
        isLoading || !headers
        ? <Loader/>
        : `Presented ${headers['x-current-amount']} out of ${headers['x-total-amount']}`
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