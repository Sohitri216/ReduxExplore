import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import productReducer from '../reducers/counterReducer'
import userReducer from '../reducers/userReducers';
import counterReducer from '../reducers/counterReducer';
import createSagaMiddleware from 'redux-saga';
import { watchIncrement } from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer,
    counterVal: counterReducer
});

const initStore = {
    products: [{
        name: 'iPhone'
    }],
    user: 'Michael',
    counterVal: 0
}

export const store = createStore(
    allReducers,
    initStore,
    applyMiddleware(sagaMiddleware)
    // window.devToolsExtension && window.devToolsExtension()
);
sagaMiddleware.run(watchIncrement);