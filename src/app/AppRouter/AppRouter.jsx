import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "app/routes/routes";
import { Suspense } from "react";

const AppRouter = () => {
  return (
      <Routes>
        {
          PUBLIC_ROUTES.map(route => {
            return <Route path={route.path} key={route.key} element={
                    <Suspense fallback="Loading...">
                      {route.element}
                    </Suspense>
            }/>
          })
        }
      </Routes>
  )
}

export default AppRouter;