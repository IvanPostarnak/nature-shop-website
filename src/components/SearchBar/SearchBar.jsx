import {memo} from 'react';
import PropTypes from 'prop-types';
import Input from 'components/UI/Input/Input';

import styles from './SearchBar.module.css';

const SearchBar = ({...rest}) => {
  return (
    <div
      className={styles.search_bar}
      data-testid='search-bar'
    >
      <Input {...rest} />
    </div>
  );
};

SearchBar.propTypes = {};

export default memo(SearchBar);
