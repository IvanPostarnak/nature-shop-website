import {createAsyncThunk} from '@reduxjs/toolkit';
import {PostsService} from 'services/services';

export const fetchPostsAmount = createAsyncThunk('posts/fetchAmount', async () => {
  const {response} = await PostsService.getTotalCount();
  return response.then((res) => res.data.total_count);
});
