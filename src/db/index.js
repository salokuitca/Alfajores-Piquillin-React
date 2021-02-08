import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp ({
  apiKey: process.env.API_KEY,
  authDomain: "piquillinreact.firebaseapp.com",
  projectId: "piquillinreact",
  storageBucket: "piquillinreact.appspot.com",
  messagingSenderId: "67948536858",
  appId: "1:67948536858:web:1cb744f3b8b3555e96dda3"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}