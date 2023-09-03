
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";


  const firebaseConfig = {
    apiKey: "AIzaSyDddpDj0usfa7UanAFFnhQeGDSJcg5vLZQ",
    authDomain: "friendferret-73897.firebaseapp.com",
    projectId: "friendferret-73897",
    storageBucket: "friendferret-73897.appspot.com",
    messagingSenderId: "306916624588",
    appId: "1:306916624588:web:45c8922df2253a00e95a69",
    measurementId: "G-Z5EH5RGWCX"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
