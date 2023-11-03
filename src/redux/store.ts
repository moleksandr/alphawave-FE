// import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-router-redux'
// import createSagaMiddleware from 'redux-saga'
// import { createBrowserHistory as createHistory } from 'history'
// import rootReducer from './reducers'
// import sagas from './sagas'

// export const history = createHistory()

// const initialState = {}
// const enhancers = []


// const sagaMiddleware = createSagaMiddleware()

// const middleware = [
//   sagaMiddleware,
//   routerMiddleware(history)
// ]

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }

// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// )

// const store = createStore(
//   rootReducer,
//   initialState,
//   composedEnhancers
// )

// sagaMiddleware.run(sagas)

// export default store

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { authReducer } from "./slices/authSlice"
import { tasksReducer } from "./slices/tasksSlice";

export type RootState = {
  auth: ReturnType<typeof authReducer>;
  tasks: ReturnType<typeof tasksReducer>;
};

const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  tasks: tasksReducer,
});

const store = configureStore({
  reducer: rootReducer
})

export default store