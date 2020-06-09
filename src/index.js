import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: '0', massege: 'MY FIRST POST!!!!!!!!!!!!', like: '3' },
  { id: '1', massege: 'askldmkalsmdklasmdkl', like: '6' },
  { id: '2', massege: 'dumik.alive@gmail.com', like: '4' },
];


let dialogsData = [
  { name: "Oleg", id: "0" },
  { name: "Diana", id: "1" },
  { name: "Alex", id: "2" },
  { name: "Andre", id: "3" },
];

let massageData = [
  { massege: "Hello", id: "0" },
  { massege: "How are you?", id: "1" },
  { massege: "Hi, i am fine", id: "2" },
  { massege: "yo", id: "3" },
  { massege: "cool", id: "4" },
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} massageData={massageData}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
