import AppRouter from 'app/AppRouter/AppRouter';
import AppHolder from 'app/AppHolder/AppHolder';

import 'assets/styles/normalize.module.css';

const App = () => {
  return (
    <AppHolder>
      <AppRouter />
    </AppHolder>
  );
};

export default App;
