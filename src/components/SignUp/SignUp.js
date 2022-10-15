import React, { useEffect, useState } from "react";
import './SignUp.css'
import { Link, useLocation } from "wouter";
import useUser from "hooks/useUser";

const SignUp = () => { 

    const [data, setData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        comfirmPassword: ''
    })
    const [, navigate] = useLocation()
    const {isRegister, register, isLoading, hasError, messageError} = useUser()


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validatePassword()){
            alert('Different passwords')
            return
        }
        
        register({
            name: data.name,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        })
    }

    const validatePassword = () => {
        return data.password !== data.comfirmPassword
    }

    const handleOnChange = (e, property) => {
        e.preventDefault();
        setData({ ...data, [property]: e.target.value });
    }

    useEffect(() => {
        if(isRegister){
            navigate('/login/signin')
        }
    }, [isRegister, navigate])

    return(
        <>
            <form className="si-su-form" onSubmit={e => handleSubmit(e)}>
                <label className="si-su-label"
                >
                    Name
                    <input 
                        className="si-su-input"
                        type='text' 
                        placeholder="Name" 
                        value={data.name} 
                        onChange={e => handleOnChange(e, 'name')}
                        required
                    />
                </label>
                
                <label className="si-su-label">
                    Lastname
                    <input
                        className="si-su-input"
                        type='text' 
                        placeholder="Lastname" 
                        value={data.lastName} 
                        onChange={e => handleOnChange(e, 'lastName')}
                        required
                    />
                </label>
                
                <label className="si-su-label">
                    Email
                    <input 
                        className="si-su-input"
                        type='email' 
                        placeholder="Email" 
                        value={data.email} 
                        onChange={e => handleOnChange(e, 'email')}
                        required
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
                        required
                    />
                </label>
                
                <label className="si-su-label">
                    Comfirm password
                    <input 
                        className="si-su-input"
                        type='password' 
                        placeholder="Comfirm password" 
                        value={data.passwor} 
                        onChange={e => handleOnChange(e, 'comfirmPassword')}
                        required
                    />
                </label>
                <button className="si-su-button" type="submit" value='Sign Up'>Sign Up</button>
                {
                    isLoading && <strong className="ckecking">Ckecking data..</strong>
                }
                {
                    hasError && <strong className="invalid">Data are invalid {messageError}</strong>
                }
            </form>
            <div className="account">
                <label className="account-label">Already have an account? <Link to="/login/signin" className="account-link">Sign in</Link></label>
            </div>
        </>
    )
}
export default SignUp