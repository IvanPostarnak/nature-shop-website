import { memo } from "react";
import PropTypes from 'prop-types';
import ListItem from "components/UI/ListItem/ListItem";
import OrderedList from "components/UI/OrderedList/OrderedList";
import UnorderedList from "components/UI/UnorderedList/UnorderedList";
import H4 from "components/UI/H4/H4";

import styles from './List.module.scss';

const List = ({children, type="unordered", title, ...rest}) => {
  return (
    <div
      className={styles.list}
      data-testid="list"
    >
      <H4>{title}</H4>
      {
        type === "unordered"
        ? <UnorderedList {...rest}>
            {children}
          </UnorderedList>
        : <OrderedList {...rest}>
            {children}
          </OrderedList>
      }
    </div>
  )
};

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(ListItem),
    PropTypes.arrayOf(PropTypes.instanceOf(ListItem)),
  ]).isRequired,
  type: PropTypes.oneOf([
    "ordered",
    "unordered"
  ]),
  title: PropTypes.string
};

export default memo(List);