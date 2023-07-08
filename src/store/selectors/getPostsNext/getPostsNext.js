export const getPostsNext = (state) => state?.posts?.trident?.next || {
  id: null,
  title: null,
  entries: {}
};