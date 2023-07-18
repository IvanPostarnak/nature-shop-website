import { memo, useCallback, useMemo } from "react";
import PropTypes from 'prop-types';
import SearchBar from "components/SearchBar/SearchBar";
import { useInput } from "hooks/useInput/useInput.hook";
import { useDispatch, useSelector } from "react-redux";
import { setPostsFilterSearchQuery } from "store/actions";
import { getPostsFilterSearchQuery, getUniversalLanguages } from "store/selectors";
import H3 from "components/UI/H3/H3";
import Br from "components/UI/Br/Br";
import Select from "components/UI/Select/Select";
import Option from "components/UI/Option/Option";
import { getFromLocalStorage } from "helpers/helpers";

import styles from './PostFilter.module.scss';

const PostFilter = ({...rest}) => {
  const savedQuery = useSelector(getPostsFilterSearchQuery);
  const languagesInfo = useSelector(getUniversalLanguages);
  const {value, onInput} = useInput(() => savedQuery || '');
  const dispatch = useDispatch();

  const handleInput = useCallback((event) => {
    dispatch(setPostsFilterSearchQuery(event.target.value));
    onInput(event);
  }, []);

  const languages = useMemo(() => {
    return getFromLocalStorage(languagesInfo.key)
  }, [languagesInfo.key])

  return (
    <div
      className={styles.post_filter}
      data-testid="post-filter"
      {...rest}
    >
      <H3>{"Search"}</H3>
      <SearchBar
        value={value}
        onInput={handleInput}
      />
      <Br/>
      <H3>{"Language"}</H3>
      <Select>
        {
          languages.map((lang) => {
            return (
              <Option
                value={lang.language_id}
                key={lang.language_id}
              >
                {`${lang.name} (${lang.name_native})`}
              </Option>
            )
          })
        }
      </Select>
    </div>
  )
};

PostFilter.propTypes = {

}

export default memo(PostFilter);