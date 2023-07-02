import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "app/routes/routes";

const AppRouter = () => {
  return (
      <Routes>
        {
          PUBLIC_ROUTES.map(route => <Route {...route}/>)
        }
      </Routes>
  )
}

export default AppRouter;