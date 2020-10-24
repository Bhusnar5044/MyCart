import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import { watchActionsSaga } from '../Sagas/saga'
import createSagaMiddleware from "redux-saga"
import uiReducer from './Reducers/uiReducer'
import AxiosReducer from './Reducers/AxiosReducer'
import CartReducer from './Reducers/CartReducer'
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { from } from 'webpack-sources/lib/compatsource';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "AxiosReducer",
        "CartReducer"
    ],
  };

let allReducer = combineReducers({
    uiReducer,
    AxiosReducer,
    CartReducer
});

let ApplicationStore = createStore(
    persistReducer(persistConfig, allReducer),
    applyMiddleware(logger,sagaMiddleware)
    );

sagaMiddleware.run(watchActionsSaga);
export const persistor = persistStore(ApplicationStore);

export default ApplicationStore