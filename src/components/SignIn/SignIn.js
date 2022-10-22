import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Formik } from 'formik'
import { Form, Label, Input, Button, ErrorMessage, AccountDiv, Text, Link } from 'styles/styles'
import Spinner from "components/Spinner/Spinner";

const validateFields = (values, setState) => {
    const customErrors = {}
    if(!values.email) {
        customErrors.email = 'Required email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        customErrors.email = 'Invalid email address'
    }

    if(!values.password){
        customErrors.password = 'Requiere password'
    }

    const thereErrors = Object.keys(customErrors).length
    if(thereErrors > 0){
        setState(true)
    } else if(thereErrors === 0) {
        setState(false)
    } 
    
    return customErrors
}

const handleSubmit = (login, values, setFieldError) => {
    return (
        login({
            email: values.email.toLowerCase(),
            password: values.password
        })
        .catch((e) => setFieldError('dataError', e.message))
    )
}


const SignIn = ({ onLogin }) => {

    const {login, isLogged, isLoading} = useUser()
    const [state, setState] = useState(false) 
    const [, navigate] = useLocation()

    useEffect(() => {
        if(isLogged){
            navigate('/')
            onLogin && onLogin()
        }
    }, [isLogged, navigate, onLogin])

    return(
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    dataError: ''
                }}
                validate={values => validateFields(values, setState)}
                onSubmit={(values, {setFieldError}) => {handleSubmit(login, values, setFieldError)}}
                validateOnChange={state}
                validateOnBlur={false}
            >
                {({ errors }) => (
                    <Form disabled={isLoading}>
                        <Label>
                            <ErrorMessage name="dataError" component='small'/>
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
                        <Button type="submit" value='Sign In' disabled={isLoading}>Sign In</Button>
                        {
                            isLoading && <Spinner/>
                        }
                    </Form>
                )}
            </Formik>

           
            <AccountDiv>
                <Text>New to GIFty? <Link to="/login/signup" className="account-link">Create an account.</Link></Text>
            </AccountDiv>
        </>
    )
}
export default SignIn