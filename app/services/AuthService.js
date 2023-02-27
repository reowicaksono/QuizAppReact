import firebase from "firebase/compat/app"
import { firebaseConfig } from "../utils/FirebaseConfig";
import { ToastAndroid } from 'react-native';
import { useNavigation } from "@react-navigation/native";


// Initialize Firebase
// const navigation = useNavigation();
// Login Service
const db = firebase.firestore();

export const loginService = (emailLogin, passwordLogin) => {
    firebase.auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((credential) => {
    var user = credential.user;
    })
    // error handling
    .catch(error => {
        console.log(error);
        ToastAndroid.show('Error ' + error, ToastAndroid.SHORT);
    });
 
};

// Register Service
export const registerService = (email, password) => {
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((credential) => {
        ToastAndroid.show('User account created & signed in!', ToastAndroid.SHORT);
        var user = credential.user;
        db.collection('users').doc(user.uid).set({
                email: user.email,
                uid: user.uid,
                name: user.displayName,
        }).then(() => {
                console.log("Document successfully written!");
        });
        })

        // error handling
        .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
            ToastAndroid.show('That email address is already in use!', ToastAndroid.SHORT);
        }
    
        if (error.code === 'auth/invalid-email') {
            ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT);
        }
    
        console.error(error);
        });
};



