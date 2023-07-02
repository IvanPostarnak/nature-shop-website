import { useMatchMedia } from "hooks/hooks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDevice } from "store/actions";
import PropTypes from 'prop-types';
import { memo } from 'react';
import Header from 'widgets/Header/Header.widget';
import Background from "components/layout/Background/Background";
import Column from "components/layout/Column/Column";
import Shelf from "components/layout/Shelf/Shelf";

import styles from './AppHolder.module.scss';

const AppHolder = ({children}) => {
  const [device] = useMatchMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDevice(device));
  }, [device]);

  return (
    <div
      className={styles.holder}
      data-testid="app-holder"
    >
      <Background>
        <Shelf>
          <Header device={device}/>
        </Shelf>
        <Column device={device}>
          {children}
        </Column>
        <Shelf>

        </Shelf>
      </Background>
    </div>
  )
};

AppHolder.propTypes = {
  children: PropTypes.element,
};

export default memo(AppHolder);