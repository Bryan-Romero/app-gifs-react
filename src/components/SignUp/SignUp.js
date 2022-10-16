import React, { useState } from "react";
import './SignUp.css'
import { Link, useLocation } from "wouter";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import signUpService from "services/signUpService";


const validateFields = (values, setState) => {
    const customErrors = {}
    if(!values.name){
        customErrors.name = 'Requiere name'
    }
    if(!values.lastName){
        customErrors.lastName = 'Requiere lastname'
    }

    if(!values.email) {
        customErrors.email = 'Required email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        customErrors.email = 'Invalid email address'
    }

    if(!values.password){
        customErrors.password = 'Requiere password'
    } else if(values.password.length < 8){
        customErrors.password = 'Password length mus be greater than 7'
    }
    if(!values.comfirmPassword){
        customErrors.comfirmPassword = 'Requiere comfirm password'
    }
    if(values.password !== values.comfirmPassword){
        customErrors.password = 'Are diferent password'
        customErrors.comfirmPassword = 'Are diferent password'
    }

    const thereErrors = Object.keys(customErrors).length
    if(thereErrors > 0){
        setState(true)
    } else if(thereErrors === 0) {
        setState(false)
    } 
    
    return customErrors
}

const handleSubmit = (values, setFieldError, navigate, setRegistered) => {
        return (
            signUpService({
                name: values.name,
                lastName: values.lastName,
                email: values.email.toLowerCase(),
                password: values.password
            })
            .then(() => {
                setRegistered(true)
                setTimeout(() => {
                    navigate('/login/signin')
                }, 3000);
            })
            .catch((e) => setFieldError('user', e.message))
        )
}


const SignUp = () => { 

    const [registered, setRegistered] = useState(false)
    const [state, setState] = useState(false) 
    const [, navigate] = useLocation()
    
    
    if(registered) {
        return <h3>Successful registration!</h3>
    }

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
                validate={values => validateFields(values, setState)}
                onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError, navigate, setRegistered)}
                validateOnChange={state}
                validateOnBlur={false}
            >
                {
                    ({isSubmitting, errors, }) => (
                        <Form className="si-su-form">
                            <label className="si-su-label">
                                Name
                                <Field 
                                    className={`si-su-input ${errors.name && 'error'}`}
                                    type='text' 
                                    placeholder="Name" 
                                    name="name"
                                />
                                <ErrorMessage className="invalid" name="name" component='small'/>
                            </label>
                            <label className="si-su-label">
                                Lastname
                                <Field
                                    className={`si-su-input ${errors.lastName && 'error'}`}
                                    type='text' 
                                    placeholder="Lastname" 
                                    name="lastName"
                                />
                                <ErrorMessage className="invalid" name="lastName" component='small'/>
                            </label>
                            <label className="si-su-label">
                                Email
                                <Field 
                                    className={`si-su-input ${errors.email && 'error'}`}
                                    type='text' 
                                    placeholder="Email"
                                    name="email"
                                />
                                <ErrorMessage className="invalid" name="email" component='small'/>
                            </label>
                            <label className="si-su-label">
                                Password
                                <Field
                                    className={`si-su-input ${errors.password && 'error'}`}
                                    type='password' 
                                    placeholder="Password" 
                                    name="password"
                                />
                                <ErrorMessage className="invalid" name="password" component='small'/>
                            </label>
                            <label className="si-su-label">
                                Comfirm password
                                <Field 
                                    className={`si-su-input ${errors.comfirmPassword && 'error'}`}
                                    type='password' 
                                    placeholder="Comfirm password"
                                    name="comfirmPassword"
                                />
                                <ErrorMessage className="invalid" name="comfirmPassword" component='small'/>
                            </label>
                            <button className="si-su-button" type="submit" value='Sign Up' disabled={isSubmitting}>Sign Up</button>
                            {
                                isSubmitting && <small className="ckecking" >Ckecking data..</small>
                            }
                        </Form>
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