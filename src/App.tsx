// Dependencies
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Pages
import HomePage from './pages/Home';
import TasksPage from './pages/Tasks';
import ProjectsPage from './pages/Projects';

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
          <Route path={'/*'} element={<Navigate to={ROUTES.HOME} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
