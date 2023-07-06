import { memo } from "react";
import Image from "components/UI/Image/Image";
import { useFetch } from "hooks/hooks";
import PostsService from "services/PostsService/PostsService";
import { useSelector } from "react-redux";
import { getDevice } from "store/selectors";
import Loader from "components/UI/Loader/Loader";
import Section from "components/UI/Section/Section";
import PostCard from "components/PostCard/PostCard";
import AuthorBadge from "components/AuthorBadge/AuthorBadge";
import Avatar from "components/UI/Avatar/Avatar";
import Name from "components/UI/Name/Name";

import styles from './PostList.module.scss';
import LanguageBadge from "components/LanguageBadge/LanguageBadge";
import Text from "components/UI/Text/Text";

const PostList = () => {
  const {device} = useSelector(getDevice);
  const totalCount = useFetch(() => PostsService.getTotalCount());
  const {isLoading, data } = useFetch(() => PostsService.getAll(), {expect: "array"});

  return (
    <div
      className={styles.post_list}
      data-testid="post-list"
    >
      {
        totalCount.isLoading || !totalCount.data ? <Loader/> : totalCount.data.total_count
      }
      <Section>
        {
          isLoading || !data
          ? <Loader/>
          : data.map((post) => {
              return (
                <PostCard
                  device={device}
                  id={post.post_id}
                  title={post.title}
                  description={post.content}
                  key={post.post_id}
                >
                  <Image
                    src="/src/assets/images/post-placeholder-480-320.jpg"
                    width="280"
                  />
                  <AuthorBadge
                    device={device}
                    authorId={post.author.employee_id}
                  >
                    <Avatar
                      src="/src/assets/images/avatar-placeholder.jpg"
                      size={32}
                    />
                    <Name
                      first={post.author.first_name}
                      last={post.author.last_name}
                    />
                  </AuthorBadge>
                  <LanguageBadge
                    device={device}
                    langId={post.language.language_id}
                  >
                    <Image
                      src="/src/assets/images/usa-flag.png"
                      width={28}
                    />
                    <Text>{post.language.name}</Text>
                  </LanguageBadge>
                </PostCard>
              )
            })
        }
      </Section>
    </div>
  )
};

export default memo(PostList);