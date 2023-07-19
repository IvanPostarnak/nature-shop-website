import {memo} from 'react';
import PropTypes from 'prop-types';
import Strong from 'components/UI/Strong/Strong';

import styles from './ListItem.module.scss';

const ListItem = ({title, body, ...rest}) => {
  return (
    <li
      className={styles.list_item}
      data-testid='list-item'
      {...rest}
    >
      <Strong>{title}</Strong>
      {body}
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default memo(ListItem);
