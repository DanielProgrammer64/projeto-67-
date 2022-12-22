import firebase from 'firebase'
// adicione SDK do Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBgA2vEXJXZqNkd9Y_0tVbypTnlJP47yRY",
  authDomain: "projeto-67-15929.firebaseapp.com",
  databaseURL: "https://projeto-67-15929-default-rtdb.firebaseio.com",
  projectId: "projeto-67-15929",
  storageBucket: "projeto-67-15929.appspot.com",
  messagingSenderId: "387071910725",
  appId: "1:387071910725:web:dcb4c3c8f1fead7b9a942c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();