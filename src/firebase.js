import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOWla1RMr2UprzmgwriFVsk3tpzWHZwW4",
  authDomain: "imdb-yash.firebaseapp.com",
  projectId: "imdb-yash",
  storageBucket: "imdb-yash.appspot.com",
  messagingSenderId: "621486655535",
  appId: "1:621486655535:web:f7cd28550021ab39621eda"
};

const app=firebase.initializeApp(firebaseConfig);
export const auth=app.auth();
export default firebase;