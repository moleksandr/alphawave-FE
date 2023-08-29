// Dependencies
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Pages
import HomePage from './pages/main/Home';
import TasksPage from './pages/main/Tasks';
import ProjectsPage from './pages/main/Projects';
import LoginPage from './pages/auth/Login';
import SignUpPage from './pages/auth/SignUp';
import ChatDashboardPage from './pages/chat/Dashboard';

import { VerificationDonePage } from "./pages/main/VerificationDonePage/VerificationDonePage";
// Routes
import * as ROUTES from "./constants/routes";

// Export App
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <div className="App h-screen overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={isLoggedIn == true ? <HomePage /> : <Navigate to={ROUTES.LOGIN} replace />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path={ROUTES.TASKS} element={isLoggedIn == true ? <TasksPage /> : <Navigate to={ROUTES.LOGIN} replace />} />
          <Route path={ROUTES.PROJECTS} element={isLoggedIn == true ? <ProjectsPage /> : <Navigate to={ROUTES.LOGIN} replace />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />

          <Route path={ROUTES.VERIFICATION_DONE} element={<VerificationDonePage />} />
          <Route path={ROUTES.CHAT} element={isLoggedIn == true ? <ChatDashboardPage /> : <Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
