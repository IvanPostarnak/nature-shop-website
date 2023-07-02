import { useMatchMedia } from "hooks/hooks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDevice } from "store/actions";
import PropTypes from 'prop-types';
import { memo } from 'react';
import Header from 'widgets/Header/Header.widget';
import Background from "components/layout/Background/Background";

import styles from './AppHolder.module.scss';


const AppHolder = ({children}) => {
  const [device] = useMatchMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDevice(device));
  }, [device]);

  return (
    <Background>
      <Header device={device} />
      <div
        className={`${styles.holder} ${device.isDesktop ? styles.desktop : device.isTablet ? styles.tablet : styles.mobile}`}
        data-testid="app-holder"
      >
        Column
        {children}
      </div>
    </Background>
  )
};

AppHolder.propTypes = {
  children: PropTypes.element,
};

export default memo(AppHolder);