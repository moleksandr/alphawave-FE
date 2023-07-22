// Dependencies
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Pages
import HomePage from './pages/main/Home';
import TasksPage from './pages/main/Tasks';
import ProjectsPage from './pages/main/Projects';
import LoginPage from './pages/auth/Login';
import SignUpPage from './pages/auth/SignUp';
import { currentUser } from './utils/currentuser';
// Routes
import * as ROUTES from './constants/routes';

// Export App
const App = () => {
  const token = localStorage.getItem("token")

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  const fetch = useCallback(
    async () => {
      const user = await currentUser(token);
      setIsLoggedIn(user)
      console.log(user);
    },
    []
  )

  useEffect(() => {
    fetch()
  }, [])
  console.log(isLoggedIn)
  if(isLoggedIn!=null) {
    return (
      <div className="App h-screen overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={isLoggedIn==true ? <HomePage /> : <Navigate to={ROUTES.LOGIN} />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.TASKS} element={isLoggedIn==true ? <TasksPage /> : <Navigate to={ROUTES.LOGIN} />}/>
            <Route path={ROUTES.PROJECTS} element={isLoggedIn==true ? <ProjectsPage /> : <Navigate to={ROUTES.LOGIN} />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  return null
}

export default App;