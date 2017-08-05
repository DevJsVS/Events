import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App/index.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

function todoApp(state = {test: "test"}, action) {
    return state;
}

let store = createStore(todoApp);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-app'));


