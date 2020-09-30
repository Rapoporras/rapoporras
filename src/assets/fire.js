import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBdWWuyJ39vEgeEIvYPF0xuOhqtL9KN8p8",
  authDomain: "rapoporras-2c44a.firebaseapp.com",
  databaseURL: "https://rapoporras-2c44a.firebaseio.com",
  projectId: "rapoporras-2c44a",
  storageBucket: "rapoporras-2c44a.appspot.com",
  messagingSenderId: "579960697677",
  appId: "1:579960697677:web:912b485a4c7b66a9833d04",
  measurementId: "G-XJMZLXS8PY"
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
