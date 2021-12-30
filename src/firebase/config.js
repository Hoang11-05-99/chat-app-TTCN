import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAsN8if4nFhbWMpRYKI4beVcU8TaR6KyVM",
  authDomain: "chat-app-a7e60.firebaseapp.com",
  projectId: "chat-app-a7e60",
  storageBucket: "chat-app-a7e60.appspot.com",
  messagingSenderId: "620377751349",
  appId: "1:620377751349:web:85b4361c0f63b55d98967c",
  measurementId: "G-55MEQBGQZK",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  auth.useEmulator('http://localhost:9099');
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
