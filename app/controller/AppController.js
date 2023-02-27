import React, {useState, useEffect} from "react";
import firebase from 'firebase/compat/app';

export default function AppController  () {
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          setCurrentUser(user);
          setLoading(false);
        });
        return unsubscribe;
      }, []);
    
    return {
        emailLogin,
        setEmailLogin,
        passwordLogin,
        setPasswordLogin,
        onSubmitLogin,
        currentUser,
        loading
    }
};
