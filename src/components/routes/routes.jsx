import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Login from "../../pages/login/Login"
import { ROUTES } from "../../utils/routes"
import Home from "../../pages/home/Home"
import RequireAuth from "../../features/auth/RequireAuth"
import { useEffect } from "react"
import { selectCurrentToken } from "../../features/auth/authSlice"
import { useSelector } from "react-redux"
import Layout from "../layout/Layout"



const AppRoutes = () => {


  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  console.log(token)

  return(
  <Routes>
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.HOME} element={<Home />} />

      {/* <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Route> */}
  </Routes>
  )
}

export default AppRoutes;