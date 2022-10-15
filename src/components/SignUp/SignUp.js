import React, { useCallback } from "react";
import './SignUp.css'
import { Link, useLocation } from "wouter";
import { Formik } from 'formik'
import signUpService from "services/signUpService";

const SignUp = () => { 

    const [, navigate] = useLocation()

    return(
        <>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    password: '',
                    comfirmPassword: ''
                }}
                validate={values => {
                    const customErrors = {}
                    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
                    if(!values.name){
                        customErrors.name = 'Requiere name'
                        return customErrors
                    }
                    if(!values.lastName){
                        customErrors.lastName = 'Requiere lastname'
                        return customErrors
                    }

                    if(!values.email){
                        customErrors.email = 'Requiere email'
                        return customErrors
                    } else if(!regex.test(values.email)){
                        customErrors.email = 'Invalid email'
                        return customErrors
                    }

                    if(!values.password){
                        customErrors.password = 'Requiere password'
                        return customErrors
                    } else if(values.password.length < 8){
                        customErrors.password = 'Password length mus be greater than 7'
                        return customErrors
                    }
                    
                    if(!values.comfirmPassword){
                        customErrors.comfirmPassword = 'Requiere comfirm password'
                        return customErrors
                    }
                    return customErrors
                }}
                onSubmit={(values, {setFieldError}) => {
                    if(values.password !== values.comfirmPassword) return alert('Are diferent password')
                        return (
                            signUpService({
                                name: values.name,
                                lastName: values.lastName,
                                email: values.email.toLowerCase(),
                                password: values.password
                            })
                            .then(() => navigate('/login/signin'))
                            .catch((e) => setFieldError('user', e.message))
                        )
                    
                    // register({
                    //     name: data.name,
                    //     lastName: data.lastName,
                    //     email: data.email,
                    //     password: data.password
                    // })
                }}
            >
                {
                    ({handleSubmit, handleChange, isSubmitting, errors}) => (
                        <form className="si-su-form" onSubmit={handleSubmit}>
                            <label className="si-su-label">
                                Name
                                <input 
                                    className={`si-su-input ${errors.name && 'error'}`}
                                    type='text' 
                                    placeholder="Name" 
                                    name="name"
                                    onChange={handleChange}
                                />
                                {console.log(errors)
                                }
                                {
                                    errors.name && <small className="invalid" >{errors.name}</small>
                                }
                            </label>
                            <label className="si-su-label">
                                Lastname
                                <input
                                    className={`si-su-input ${errors.lastName && 'error'}`}
                                    type='text' 
                                    placeholder="Lastname" 
                                    name="lastName"
                                    onChange={handleChange}
                                />
                                {
                                    errors.lastName && <small className="invalid" >{errors.lastName}</small>
                                }
                            </label>
                            <label className="si-su-label">
                                Email
                                <input 
                                    className={`si-su-input ${errors.email && 'error'}`}
                                    type='text' 
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                />
                                {
                                    errors.email && <small className="invalid" >{errors.email}</small>
                                }
                            </label>
                            <label className="si-su-label">
                                Password
                                <input
                                    className={`si-su-input ${errors.password && 'error'}`}
                                    type='password' 
                                    placeholder="Password" 
                                    name="password"
                                    onChange={handleChange}
                                />
                                {
                                    errors.password && <small className="invalid" >{errors.password}</small>
                                }
                            </label>
                            <label className="si-su-label">
                                Comfirm password
                                <input 
                                    className={`si-su-input ${errors.comfirmPassword && 'error'}`}
                                    type='password' 
                                    placeholder="Comfirm password"
                                    name="comfirmPassword"
                                    onChange={handleChange}
                                />
                                {
                                    errors.comfirmPassword && <small className="invalid" >{errors.comfirmPassword}</small>
                                }
                            </label>
                            <button className="si-su-button" type="submit" value='Sign Up' disabled={isSubmitting}>Sign Up</button>
                            {
                                isSubmitting && <small className="ckecking" >Ckecking data..</small>
                            }
                        </form>
                    )
                }
            </Formik>
            <div className="account">
                <label className="account-label">Already have an account? <Link to="/login/signin" className="account-link">Sign in</Link></label>
            </div>
        </>
    )
}
export default SignUp