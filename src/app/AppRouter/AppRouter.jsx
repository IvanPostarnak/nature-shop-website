import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "app/routes/routes";

const AppRouter = () => {
  return (
      <Routes>
        {
          publicRoutes.map(route => <Route {...route}/>)
        }
      </Routes>
  )
}

export default AppRouter;