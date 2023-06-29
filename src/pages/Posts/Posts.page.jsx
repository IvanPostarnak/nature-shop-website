import { memo } from "react";

const Posts = memo(() => {
  return (
    <div data-testid="posts-page">
      Posts Page
    </div>
  )
});

export default Posts;