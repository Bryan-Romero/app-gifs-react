import axios from "api/axios";
import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import './SignIn.css'

const SignIn = () => {

    const initialData = {
        email: '',
        password: ''
    } 

    const [data, setData] = useState(initialData)
    const [, navigate] = useLocation()
    const {login, isLogged, isLoginLoading, hasLoadingError} = useUser()

    const handleSubmit = async (e) => {
        e.preventDefault();
        login({email: data.email, password: data.password})
    }

    const handleOnChange = (e, property) => {
        e.preventDefault();
        setData({ ...data, [property]: e.target.value });
    }

    useEffect(() => {
        if(isLogged){
            navigate('/')
        }
    }, [isLogged])

    if(isLoginLoading) return

    return(
        <form className="signInForm" onSubmit={e => handleSubmit(e)}>
            <label>Email</label>
            <input 
                type='email' 
                placeholder="Email" 
                value={data.email} 
                onChange={e => handleOnChange(e, 'email')}
            />
            <label>Password</label>
            <input 
                type='password' 
                placeholder="Password" 
                value={data.passwor} 
                onChange={e => handleOnChange(e, 'password')}
            />
            <input
                type='submit' 
                value='Sign In'
            />
            {
                isLoginLoading && <strong>Ckecking credentials..</strong>
            }
            {
                hasLoadingError && <strong>Credential are invalid</strong>
            }
        </form>
    )
}
export default SignIn