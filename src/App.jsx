import AppRouter from "app/AppRouter/AppRouter";
import AppHolder from "app/AppHolder/AppHolder";
import 'assets/scss/normalize.module.scss';

const App = () => {
  return (
    <AppHolder>
      <AppRouter/>
    </AppHolder>
  )
};

export default App;