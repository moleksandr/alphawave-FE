// Dependencies
import { FC } from "react"
import {Navigate, Outlet } from "react-router-dom"
import {useSelector} from 'react-redux'

// Routes
import * as ROUTES from '../constants/routes'
import { RootState } from "../redux/store"

// Components
const PrivateRoute: FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)
  return (
    isAuth == true ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
  )
}

export default PrivateRoute