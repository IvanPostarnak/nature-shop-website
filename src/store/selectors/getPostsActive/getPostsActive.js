export const getPostsActive = (state) => state?.posts?.trident?.active || {
  id: null,
  title: null
};