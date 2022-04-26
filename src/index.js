import React from 'react';
// Renders our web page 
// import ReactDom from 'react-dom';
// React 18 
import { createRoot } from 'react-dom/client';
//////////// Refactoring 
import { BrowserRouter } from "react-router-dom"
// import { createStore } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import rootReducer from './redux/reducer'
import { Provider } from 'react-redux';

import './styles/stylesheets.css';
import App from './Components/App';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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