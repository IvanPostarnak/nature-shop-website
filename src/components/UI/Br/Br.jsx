import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './Br.module.css';

const Br = ({...rest}) => {
  return (
    <br
      className={styles.br}
      data-testid='br'
      {...rest}
    />
  );
};

Br.propTypes = {};

export default memo(Br);
