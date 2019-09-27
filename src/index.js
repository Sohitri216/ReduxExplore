import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Switch } from 'react-router'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import {configureStore,  history } from './store/store';

import counter from './components/counter';
import todo from './components/todoComponent/todo';

const myProps = {
    details: 'sen.s5@cambridgeassessment.org.uk'
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/todo' component={todo} />
                <Route path='/counter' component={counter} />
            </Switch>
        </ConnectedRouter>
        {/* <App randomProps={myProps} /> */}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
