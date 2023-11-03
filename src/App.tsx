// Dependencies
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'

// Pages
import HomePage from './pages/main/Home';
import TasksPage from './pages/main/Tasks';
import ProjectsPage from './pages/main/Projects';
import LoginPage from './pages/auth/Login';
import SignUpPage from './pages/auth/SignUp';
import CreateTeamPage from './pages/createTeam';
import Files from './pages/main/Files';
import Admin from './pages/main/Admin';
import ChatDashboardPage from './pages/chat/Dashboard';
import { VerificationDonePage }  from "./pages/main/VerificationDonePage/VerificationDonePage";

// Routes
import * as ROUTES from "./constants/routes";
import PrivateRoute from './utils/privateRoute';
import { AuthState, fetchCheckAuth, fetchGetCurrentUser } from './redux/slices/authSlice';
import { RootState } from './redux/store';


// Export App
const App = () => {
  const {isAuth, status, loading, userInfo, isRefreshToken}: AuthState = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchGetCurrentUser())
  }, [isAuth])

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      dispatch(fetchCheckAuth())
    }
  }, [])



  if (loading) {
    return (
      <div></div>
    )
  }

  return (
    <div className="App h-screen overflow-x-hidden">
      <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path={ROUTES.HOME} element={<HomePage />}/>
                <Route path={ROUTES.TASKS} element={<TasksPage />}/>
                <Route path={ROUTES.PROJECTS} element={<ProjectsPage />}/>
                <Route path={ROUTES.ADMIN} element={<Admin />}/>
                <Route path={ROUTES.FILES} element={<Files />}/> 
                <Route path={ROUTES.CHAT} element={<ChatDashboardPage /> }/>
              </Route>
              <Route path={ROUTES.LOGIN}  element={<LoginPage />} />
              <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
              <Route path={ROUTES.VERIFICATION_DONE} element={<VerificationDonePage />} />
              <Route path={ROUTES.CREATE_TEAM} element={<CreateTeamPage />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
