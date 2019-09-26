import { combineReducers, createStore, applyMiddleware } from 'redux';
import todoReducer from '../reducers/todoReducer'
import userReducer from '../reducers/userReducers';
import counterReducer from '../reducers/counterReducer';
import createSagaMiddleware from 'redux-saga';
import { watchIncrement } from '../saga/saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {initReducer} from '../reducers/initReducer';


const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user: userReducer,
    counterVal: counterReducer,
    todoList: todoReducer
});

// const initStore = {
//     user: 'Michael',
//     counterVal: 0,
//     todoList: []
// }

export const store = createStore(
    rootReducer(history),
    initReducer,
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
);
sagaMiddleware.run(watchIncrement);
