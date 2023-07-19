import {memo} from 'react';
import PropTypes from 'prop-types';
import H5 from 'components/UI/H5/H5';

import styles from './Name.module.css';

const Name = ({first, last, ...rest}) => {
  return (
    <div
      className={styles.name}
      data-testid='name'
      {...rest}
    >
      <H5>{`${first} ${last}`}</H5>
    </div>
  );
};

Name.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
};

export default memo(Name);
