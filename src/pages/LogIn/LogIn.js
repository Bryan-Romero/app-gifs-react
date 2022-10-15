import SignIn from "components/SignIn/SignIn";
import SignUp from "components/SignUp/SignUp";
import React from "react";
import './LogIn.css'

const LogIn = ({ params }) => {
    const {type} = params
    return(
        <div className="logIn">
            {
                (type === 'signin' || type === undefined) && <SignIn />
            }
            {
                type === 'signup' && <SignUp />
            }
            
        </div>
    )
}
export default LogIn