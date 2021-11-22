import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmHoEbobYv52vzHhgndvBkxkuepxp48mo",
    authDomain: "gimenez-app.firebaseapp.com",
    projectId: "gimenez-app",
    storageBucket: "gimenez-app.appspot.com",
    messagingSenderId: "889701448449",
    appId: "1:889701448449:web:8c518f434055de0422b900",
    measurementId: "G-BVT91DKWEF"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
}