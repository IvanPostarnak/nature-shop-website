import { memo, useCallback } from "react";
import PropTypes from 'prop-types';
import SearchBar from "components/SearchBar/SearchBar";
import { useInput } from "hooks/useInput/useInput.hook";
import { useDispatch, useSelector } from "react-redux";
import { setPostsFilterSearchQuery } from "store/actions";
import { getPostsFilterSearchQuery } from "store/selectors";

import styles from './PostFilter.module.scss';

const PostFilter = ({...rest}) => {
  const savedQuery = useSelector(getPostsFilterSearchQuery);
  const {value, onInput} = useInput(() => savedQuery || '');
  const dispatch = useDispatch();

  const handleInput = useCallback((event) => {
    dispatch(setPostsFilterSearchQuery(event.target.value));
    onInput(event);
  }, []);

  return (
    <div
      className={styles.post_filter}
      data-testid="post-filter"
      {...rest}
    >
      <SearchBar
        value={value}
        onInput={handleInput}
      />
    </div>
  )
};

PostFilter.propTypes = {

}

export default memo(PostFilter);