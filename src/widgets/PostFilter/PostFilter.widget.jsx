import { memo } from "react";
import PropTypes from 'prop-types';
import SearchBar from "components/SearchBar/SearchBar";
import { useInput } from "hooks/useInput/useInput.hook";

import styles from './PostFilter.module.scss';

const PostFilter = ({...rest}) => {
  const search = useInput('')
  return (
    <div
      className={styles.post_filter}
      data-testid="post-filter"
      {...rest}
    >
      <SearchBar {...search} />
    </div>
  )
};

PostFilter.propTypes = {

}

export default memo(PostFilter);