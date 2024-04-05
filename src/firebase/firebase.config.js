// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANUmQNrIAO2AEwPww5SUbjMU5yJ4utCrs",
  authDomain: "auth-privet-route-17066.firebaseapp.com",
  projectId: "auth-privet-route-17066",
  storageBucket: "auth-privet-route-17066.appspot.com",
  messagingSenderId: "917454532630",
  appId: "1:917454532630:web:15ad9f048ff37c2e4dc537",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
