import React, {useState,useEffect} from "react";
import { loginService } from "../services/AuthService";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat/app"
import { firebaseConfig } from "../utils/FirebaseConfig";
export default function LoginController  () {
    const navigation = useNavigation();
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    
    const [isLogin, setIsLogin] = useState(false);

    const onSubmitLogin = () => {
        if(emailLogin != '' && passwordLogin != ''){
        loginService(emailLogin, passwordLogin);
        
        firebase.auth().onAuthStateChanged(function(user) {
            if(user != null){
                setIsLogin(true);
            }
        });
        console.log(isLogin);
        }else{
        alert('Data tidak boleh kosong')
        }
    };
    // jika sudah login
    useEffect(() => {
        if(isLogin){
        navigation.navigate('Home')
        }
    }, [isLogin]);
    
    return {
        emailLogin,
        setEmailLogin,
        passwordLogin,
        setPasswordLogin,
        onSubmitLogin
    }

};
