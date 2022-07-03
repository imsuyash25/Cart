import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQHnmR8T0AVXlG29YqI4Dy8M_RQphwwjA",
    authDomain: "cart-932f2.firebaseapp.com",
    projectId: "cart-932f2",
    storageBucket: "cart-932f2.appspot.com",
    messagingSenderId: "723106618143",
    appId: "1:723106618143:web:e2f66c09232e5ac7932e2a"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

