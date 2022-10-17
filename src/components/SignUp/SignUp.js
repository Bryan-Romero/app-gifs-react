import React, { useState } from "react";
import { useLocation } from "wouter";
import { Formik } from 'formik'
import signUpService from "services/signUpService";
import { Form, Label, Input, Button, ErrorMessage, AccountDiv, Text, Link } from 'styles/styles'
import Spinner from "components/Spinner/Spinner";


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
            .catch((e) => setFieldError('dataError', e.message))
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
                    comfirmPassword: '',
                    dataError: ''
                }}
                validate={values => validateFields(values, setState)}
                onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError, navigate, setRegistered)}
                validateOnChange={state}
                validateOnBlur={false}
            >
                {
                    ({ isSubmitting, errors }) => (
                        <Form disabled={isSubmitting}>
                            <Label>
                                <ErrorMessage name="dataError" component='small'/>
                            </Label>
                            <Label>
                                Name
                                <Input 
                                    type='text' 
                                    placeholder="Name" 
                                    name="name"
                                    errors={errors.name}
                                />
                                <ErrorMessage name="name" component='small'/>
                            </Label>
                            <Label>
                                Lastname
                                <Input
                                    type='text' 
                                    placeholder="Lastname" 
                                    name="lastName"
                                    errors={errors.lastName}
                                />
                                <ErrorMessage name="lastName" component='small'/>
                            </Label>
                            <Label>
                                Email
                                <Input
                                    type='text' 
                                    placeholder="Email"
                                    name="email"
                                    errors={errors.email}
                                />
                                <ErrorMessage name="email" component='small'/>
                            </Label>
                            <Label>
                                Password
                                <Input
                                    type='password' 
                                    placeholder="Password" 
                                    name="password"
                                    errors={errors.password}
                                />
                                <ErrorMessage name="password" component='small'/>
                            </Label>
                            <Label>
                                Comfirm password
                                <Input 
                                    type='password' 
                                    placeholder="Comfirm password"
                                    name="comfirmPassword"
                                    errors={errors.comfirmPassword}
                                />
                                <ErrorMessage name="comfirmPassword" component='small'/>
                            </Label>
                            <Button type="submit" value='Sign Up' disabled={isSubmitting}>Sign Up</Button>
                            {
                                isSubmitting && <Spinner/>
                            }
                        </Form>
                    )
                }
            </Formik>
            <AccountDiv>
                <Text>Already have an account? <Link to="/login/signin">Sign in</Link></Text>
            </AccountDiv>
        </>
    )
}
export default SignUp