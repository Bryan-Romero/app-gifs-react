import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import './SignIn.css'

const SignIn = ({ onLogin }) => {

    const initialData = {
        email: '',
        password: ''
    } 

    const [data, setData] = useState(initialData)
    const [, navigate] = useLocation()
    const {login, isLogged, isLoading, hasError, messageError} = useUser()

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
            onLogin && onLogin()
        }
    }, [isLogged, navigate, onLogin])

    if(isLoading) return

    return(
        <>
            <form className="si-su-form" onSubmit={e => handleSubmit(e)}>
                <label className="si-su-label">
                    Email
                    <input
                        className="si-su-input"
                        type='email' 
                        placeholder="Email" 
                        value={data.email} 
                        onChange={e => handleOnChange(e, 'email')}
                    />
                </label>
                <label className="si-su-label">
                    Password
                    <input
                        className="si-su-input"
                        type='password' 
                        placeholder="Password" 
                        value={data.passwor} 
                        onChange={e => handleOnChange(e, 'password')}
                    />
                </label>
                <button className="si-su-button" type="submit" value='Sign In'>Sign In</button>
                {
                    isLoading && 
                        <label className="si-su-label">
                            <small className="ckecking">Ckecking credentials..</small>
                        </label>

                }
                {
                    hasError && 
                        <label className="si-su-label">
                            <small className="invalid">Credential are invalid {messageError}</small>
                        </label>
                }
            </form>
            <div className="account">
                <p className="account-txt">New to GIFty? <Link to="/login/signup" className="account-link">Create an account.</Link></p>
            </div>
        </>
    )
}
export default SignIn