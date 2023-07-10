export const getPostsPrev = (state) => state?.posts?.trident?.prev || {
  id: null,
  title: null
};