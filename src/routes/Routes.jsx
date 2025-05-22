import { Routes, Route } from "react-router-dom"
import AllMenu from "./index"

const AllRoutes = () => {
  return (
    <Routes>
      {AllMenu.map((route, idx) =>
        route.path === "/buy/" ? (
          <Route index element={route.element} key={idx} />
        ) : (
          <Route path={route.path} element={route.element} key={idx} />
        )
      )}
    </Routes>
  )
}

export default AllRoutes
