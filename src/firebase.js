import firebase from "@firebase/app"
import "@firebase/firestore"
import { getAnalytics } from "@firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCdz5Q92XlB9HAWInnH6HwD3Qybb0T6bGY",
    authDomain: "open-branding-awards.firebaseapp.com",
    projectId: "open-branding-awards",
    storageBucket: "open-branding-awards.appspot.com",
    messagingSenderId: "441106989168",
    appId: "1:441106989168:web:399a14aa1b7e6f555bf4b5",
    measurementId: "G-KLY2NJNDHC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase
