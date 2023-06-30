import AppRouter from "app/AppRouter/AppRouter";
import { useMatchMedia } from "./hooks/hooks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDevice } from "./store/actions";

const App = () => {
  const [device] = useMatchMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDevice(device));
  }, [device]);

  return (
    <AppRouter/>
  )
};

export default App;