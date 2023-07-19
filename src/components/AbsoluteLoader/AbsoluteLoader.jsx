import {memo} from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/UI/Modal/Modal';
import Loader from 'components/UI/Loader/Loader';

import styles from './AbsoluteLoader.module.css';

const AbsoluteLoader = () => {
  return (
    <div
      data-testid='absolute-loader'
      className={styles.absolute_loader}
    >
      <Modal
        bgc='#fff'
        bgo={0.2}
        z={9000}
      >
        <Loader z={9001} />
      </Modal>
    </div>
  );
};

AbsoluteLoader.propTypes = {};

export default memo(AbsoluteLoader);
