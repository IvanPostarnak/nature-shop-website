export const getPosts = (state) => state?.posts || {
  amount: 0,
  start: 0,
  step: 10,
  activePage: 1
};