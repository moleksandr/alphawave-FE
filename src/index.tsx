// Dependencies
// import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerLicense } from '@syncfusion/ej2-base';
import { Provider } from 'react-redux';
// Styles
import './index.css';

// Components
import App from './App';

// Helpers
import reportWebVitals from './reportWebVitals';

// Contexts
import { TaskProvider } from './contexts/TaskContext';
import { AppProvider } from './contexts/AppContext';
import { ChatProvider } from './contexts/ChatContext';
import { ProjectProvider } from './contexts/ProjectContext';
import store from './redux/store';


// Registering Syncfusion license key
registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE || '');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AppProvider>
      <TaskProvider>
        <ChatProvider>
          <ProjectProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </ProjectProvider>
        </ChatProvider>
      </TaskProvider>
    </AppProvider>
);

reportWebVitals();
