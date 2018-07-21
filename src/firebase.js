import firebase from "firebase"
var fire;
var config = {
  apiKey: "AIzaSyBhJ4Kuf9DwOI3HsaYrZUOa5TVPk_F7YxY",
  authDomain: "bikemode-41b27.firebaseapp.com",
  databaseURL: "https://bikemode-41b27.firebaseio.com",
  projectId: "bikemode-41b27",
  storageBucket: "bikemode-41b27.appspot.com",
  messagingSenderId: "426187781037"
};
fire = firebase.initializeApp(config);

export default fire;