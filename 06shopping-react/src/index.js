import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
//import { AdminLogin } from './components/class-component/admin-login';
//import { EventBindingPreventDefault } from './components/EventBinding/event-binding-prevent-default';
//import { TimerDemo } from './components/timer-event/Timerdemo';
//import { EventBindingPropagation } from './components/EventBinding/event-binding-propagation';
//import { EventBinding } from './components/EventBinding/event-binding';
//import { ClassBindingFont } from './components/class-binding/class-binding-font';
//import { ClassBindingSorting } from './components/class-binding/class-binding-sorting';
//import { ClassBinding } from './components/class-binding/class-binding';
//import { StyleBinding } from './components/style-binding/style-binding';
// import { DataBinding } from './components/data-binding/data-binding';
// import { DataBindingObject } from './components/data-binding/data-binding-object';
// import { DataBindingArray } from './components/data-binding/data-binding-array';
// import { DataBindingDate } from './components/data-binding/data-binding-date';
// import { DataBindingState } from './components/data-binding/data-binding-state';
//import { TwoWayDataBinding } from './components/data-binding/data-binding-two-way';
//import { NetflixIndex } from './netflix/netflix-index/netflix-index';
//import { UserLogin } from './components/login/user-logic';
import { Fakestore } from './fakestore/fakestore';
import { Provider } from 'react-redux';
import store from './fakestore/store';
import { NetflixIndex } from './netflix/netflix-index/netflix-index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NetflixIndex />
    {/* <DataBinding /> */}
    {/* <DataBindingObject /> */}
    {/* <DataBindingArray /> */}
    {/* <DataBindingDate /> */}
    {/* <DataBindingState /> */}
    {/* <TwoWayDataBinding /> */}
    {/* <StyleBinding /> */}
    {/* <ClassBinding /> */}
    {/* <ClassBindingSorting /> */}
    {/* <ClassBindingFont /> */}
    {/* <EventBinding /> */}
    {/* <EventBindingPropagation /> */}
    {/* <EventBindingPreventDefault /> */}
    {/* <TimerDemo /> */}
    {/* <AdminLogin /> */}
    {/* <UserLogin /> */}
    {/* <Provider store={store}>
      <Fakestore />
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
