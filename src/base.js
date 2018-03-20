import Rebase from "re-base";
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDktzBvC_h6nGWmh3yImWImIs3p8d3ni9o",
    authDomain: "catch-of-the-day-plex.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-plex.firebaseio.com"
  });

  const base = Rebase.createClass(firebaseApp.database());

  //named export
  export {firebaseApp};

  //default export

  export default base;