import { Route, Routes } from "react-router-dom"
import Login from "../../pages/login/Login"
import { ROUTES } from "../../utils/routes"
import Home from "../../pages/home/Home"



const AppRoutes = () => {
  return(
    <Routes>
      <Route index element={<Login />}/>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  )
}

export default AppRoutes;