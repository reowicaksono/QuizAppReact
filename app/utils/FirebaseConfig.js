import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//get data api key from firebase
export const firebaseConfig = {
    apiKey: "AIzaSyCmuz7LwHbvf64iPPEeRupGhmwU_DJmtN8",
    authDomain: "quizappreact-d9b8f.firebaseapp.com",
    projectId: "quizappreact-d9b8f",
    storageBucket: "quizappreact-d9b8f.appspot.com",
    messagingSenderId: "943412867054",
    appId: "1:943412867054:web:5f4319ed7517a4967be8ff"
};

//is firebase already initialized?
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}