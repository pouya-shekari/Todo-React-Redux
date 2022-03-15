import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQR5mk0nBV-djVUrH_-slb2kltiLELDz0",
    authDomain: "todoist-f21f4.firebaseapp.com",
    projectId: "todoist-f21f4",
    storageBucket: "todoist-f21f4.appspot.com",
    messagingSenderId: "81111667175",
    appId: "1:81111667175:web:84e9c42303b161a8262d42"
};

const firebaseI = firebase.initializeApp(firebaseConfig)

export {firebaseI as firebase}