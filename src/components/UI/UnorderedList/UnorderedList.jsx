import {memo} from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/UI/ListItem/ListItem';

import styles from './UnorderedList.module.scss';

const UnorderedList = ({children, ...rest}) => {
  return (
    <ul
      className={styles.unordered_list}
      data-testid='unordered-list'
      {...rest}
    >
      {children}
    </ul>
  );
};

UnorderedList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(ListItem),
    PropTypes.arrayOf(PropTypes.instanceOf(ListItem)),
  ]).isRequired,
};

export default memo(UnorderedList);
