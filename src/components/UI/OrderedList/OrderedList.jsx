import { memo } from "react";
import PropTypes from 'prop-types';
import ListItem from "components/UI/ListItem/ListItem";

import styles from './OrderedList.module.scss';

const OrderedList = ({children, ...rest}) => {
  return (
    <ol
      className={styles.ordered_list}
      data-testid="ordered-list"
      {...rest}
    >
      {children}
    </ol>
  )
};

OrderedList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(ListItem),
    PropTypes.arrayOf(PropTypes.instanceOf(ListItem)),
  ]).isRequired
};

export default memo(OrderedList);