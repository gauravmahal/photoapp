import React from 'react';
// Renders our web page 
// import ReactDom from 'react-dom';
// React 18 
import { createRoot } from 'react-dom/client';
//////////// Refactoring 
import { BrowserRouter } from "react-router-dom"
// import { createStore } from 'redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import rootReducer from './redux/reducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './styles/stylesheets.css';
import App from './Components/App';
// import { database } from './database/config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// // Deprecated in react 18 
// ReactDom.render(element, document.getElementById('root'))
const root = createRoot(document.getElementById('root'));
// Constructor method of main will automatically will be called
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
) 