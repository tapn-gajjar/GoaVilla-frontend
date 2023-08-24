import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./Reducer/rootReducer"
import rootSaga from './Saga/saga';


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store


// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
// import rootReducer from './Reducer/rootReducer';
// import rootSaga from '../Redux-saga/Saga/saga';

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   storage: storage,
  
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default function stores() {
//   const store = createStore(
//     persistedReducer,
//     compose(
//       applyMiddleware(sagaMiddleware),
//     ),
//   );
//   sagaMiddleware.run(rootSaga);
//   const persistor = persistStore(store);
//   return {store, persistor};
// };

