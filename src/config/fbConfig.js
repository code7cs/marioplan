import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQ25gjL0beyeNakTPah7ppGDsl_ZOWZuM",
  authDomain: "hanfan-marioplan.firebaseapp.com",
  databaseURL: "https://hanfan-marioplan.firebaseio.com",
  projectId: "hanfan-marioplan",
  storageBucket: "hanfan-marioplan.appspot.com",
  messagingSenderId: "871351180987"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
