import axios from "../../api/axios";
import React, { useState } from "react";
import './SignUp.css'

const SignUp = () => {

    const initialData = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        comfirmPassword: ''
    } 

    const [data, setData] = useState(initialData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validatePassword()){
            alert('Different passwords')
            return
        }
        try {
            const response = await axios.post('/signUpUser', {
                name: data.name,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response);
        } catch(e) {
            console.log(e);
        }
    }
    /*
    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/post', {
            },
            {
                headers: {
                    'authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZFVzZXIiOjI2LCJuYW1lIjoiQnJ5YW4iLCJsYXN0TmFtZSI6IlJvbWVybyJ9XSwiaWF0IjoxNjY1NDY4MzM3LCJleHAiOjE2NjU0NjgzNjl9.gyFiZXLYri-X2pXoW7kiZnEtsxCqwkZGD_topXGPSXM'
                }
            });

            console.log(response);
        } catch(e) {
            console.log(e);
        }
    }*/

    const validatePassword = () => {
        return data.password !== data.comfirmPassword
    }

    const handleOnChange = (e, property) => {
        e.preventDefault();
        setData({ ...data, [property]: e.target.value });
    }

    return(
        <form className="signUpForm" onSubmit={e => handleSubmit(e)}>
            <label>Name</label>
            <input 
                type='text' 
                placeholder="Name" 
                value={data.name} 
                onChange={e => handleOnChange(e, 'name')}
            />
            <label>Lastname</label>
            <input 
                type='text' 
                placeholder="Lastname" 
                value={data.lastName} 
                onChange={e => handleOnChange(e, 'lastName')}
            />
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
            <label>Comfirm password</label>
            <input 
                type='password' 
                placeholder="Comfirm password" 
                value={data.passwor} 
                onChange={e => handleOnChange(e, 'comfirmPassword')}
            />
            <input
                type='submit' 
                value='Sign Up'
            />
        </form>
    )
}
export default SignUp