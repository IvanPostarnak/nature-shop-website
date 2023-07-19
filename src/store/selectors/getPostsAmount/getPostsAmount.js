export const getPostsAmount = (state) =>
  state?.posts?.amount || {
    value: 0,
    status: 'idle',
  };
