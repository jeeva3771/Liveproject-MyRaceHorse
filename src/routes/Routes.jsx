import { Routes, Route } from "react-router-dom"
import AllMenu from './index'

const AllRoutes = () => {
  return (
    <Routes>
      {AllMenu.map((route, idx) => (
        <Route 
            key={idx} 
            path={route.path} 
            element={route.element} 
        />
      ))}
    </Routes>
  )
}

export default AllRoutes