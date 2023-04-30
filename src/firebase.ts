import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyAd7wbm59Yi21Q8jw4mat7xxCYG9kYPdFs",
  authDomain: "richflix-5087c.firebaseapp.com",
  projectId: "richflix-5087c",
  storageBucket: "richflix-5087c.appspot.com",
  messagingSenderId: "674401903258",
  appId: "1:674401903258:web:6f34916f2de314e76c3523",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;
