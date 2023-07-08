import { memo } from "react";
import PostsService from "services/PostsService/PostsService";
import { useSelector } from "react-redux";
import { getDevice } from "store/selectors";
import Loader from "components/UI/Loader/Loader";
import Section from "components/UI/Section/Section";
import PostCard from "components/PostCard/PostCard";
import Pagination from "components/Pagination/Pagination";
import { usePagination } from "hooks/hooks";

import styles from './PostList.module.scss';

const PostList = () => {
  const {step, setStart, isLoading, data, headers} = usePagination(PostsService.getOnePage.bind(PostsService))
  const device = useSelector(getDevice);

  return (
    <div
      className={styles.post_list}
      data-testid="post-list"
    >
      {
        !headers
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
      {
        !headers
        ? <Loader/>
        : <Pagination
            device={device}
            totalAmount={Number(headers['x-total-amount'])}
            step={step}
            onChangePage={setStart}
          />
      }
    </div>
  )
};

export default memo(PostList);