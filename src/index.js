import React from 'react';
// Renders our web page 
// import ReactDom from 'react-dom';
// React 18 
import { createRoot } from 'react-dom/client';
//////////// Refactoring 
import Main from './Components/Main';

import './styles/stylesheets.css';

// // Deprecated in react 18 
// ReactDom.render(element, document.getElementById('root'))
const root = createRoot(document.getElementById('root'));
// Constructor method of main will automatically will be called
root.render(<Main />) 