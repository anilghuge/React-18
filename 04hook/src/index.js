import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
//import { ContextDemo } from './usecontext-hook/ContextDemo';
import { ReducerDemo } from './usereducer-hook/Reducer-Demo';
///import { TimeoutDemo } from './useref-hook/TimeoutDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TimeoutDemo /> */}
    {/* <ContextDemo /> */}
    <ReducerDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
