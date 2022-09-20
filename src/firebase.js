import firebase from "./firebase"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA5cc6cZNwVI9WREwFEUxv32pTTDpe0j0Q",
    authDomain: "merge-cf5d6.firebaseapp.com",
    projectId: "merge-cf5d6",
    storageBucket: "merge-cf5d6.appspot.com",
    messagingSenderId: "602440205575",
    appId: "1:602440205575:web:63aca8e41b2885bfc371a2",
    measurementId: "G-6QMLWYL7R2"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;