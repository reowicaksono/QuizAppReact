import { useState } from "react";
import { registerService } from "../services/AuthService";


export default function Registercntrl () {
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');

    const onSubmitRegister = () => {
        if(emailRegister != '' && passwordRegister != '' && confirmPasswordRegister != ''){
        registerService(emailRegister, passwordRegister);
        }else{
        alert('Data tidak boleh kosong')
        }
    };

    return {
        emailRegister,
        setEmailRegister,
        passwordRegister,
        setPasswordRegister,
        confirmPasswordRegister,
        setConfirmPasswordRegister,
        onSubmitRegister
    }
};