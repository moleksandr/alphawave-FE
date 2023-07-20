// Dependencies
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Pages
import HomePage from './pages/main/Home';
import TasksPage from './pages/main/Tasks';
import ProjectsPage from './pages/main/Projects';
import LoginPage from './pages/auth/Login';
import SignUpPage from './pages/auth/SignUp';

// Routes
import * as ROUTES from './constants/routes';

// Export App
const App = () => {
  return (
    <div className="App h-screen overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.TASKS} element={<TasksPage />} />
          <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={'/*'} element={<Navigate to={ROUTES.HOME} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
