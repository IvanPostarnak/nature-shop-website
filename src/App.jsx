import { useMatchMedia } from "./hooks/hooks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDevice } from "./store/actions";
import AppRouter from "app/AppRouter/AppRouter";
import AppHolder from "app/AppHolder/AppHolder";
import 'assets/scss/normalize.module.scss';

const App = () => {
  const [device] = useMatchMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDevice(device));
  }, [device]);

  return (
    <AppHolder device={device}>
      <AppRouter/>
    </AppHolder>
  )
};

export default App;