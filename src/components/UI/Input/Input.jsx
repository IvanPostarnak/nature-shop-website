import { memo } from 'react';
import styles from './Input.module.scss';

const Input = ({...rest}) => {
  return (
    <input
      className={styles.input}
      data-testid="input"
      {...rest}
    />
  )
};

export default memo(Input);