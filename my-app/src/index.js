import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

//firebase 
const firebaseConfig = {
  apiKey: "AIzaSyBfJ9NRcuPmDJDohdgNgtFS_UTeu866w0U",
  authDomain: "nudrop-store.firebaseapp.com",
  projectId: "nudrop-store",
  storageBucket: "nudrop-store.appspot.com",
  messagingSenderId: "797407698145",
  appId: "1:797407698145:web:b1c660eb0d1122400e6ba0"
};
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
