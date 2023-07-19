import {memo} from 'react';

import styles from './Image.module.css';

const Image = ({...rest}) => {
  return (
    <img
      className={styles.image}
      data-testid='image'
      {...rest}
    />
  );
};

export default memo(Image);
