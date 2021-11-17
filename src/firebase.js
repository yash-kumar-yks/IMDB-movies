import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOWla1RMr2UprzmgwriFVsk3tpzWHZwW4",
  authDomain: "imdb-yash.firebaseapp.com",
  projectId: "imdb-yash",
  storageBucket: "imdb-yash.appspot.com",
  messagingSenderId: "621486655535",
  appId: "1:621486655535:web:f7cd28550021ab39621eda"
};

firebase.initializeApp(firebaseConfig);
export default firebase;