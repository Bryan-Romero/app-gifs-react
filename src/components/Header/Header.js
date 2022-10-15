import useUser from "hooks/useUser";
import React from "react";
import { Link, useRoute } from "wouter";
import './Header.css'

const Header = () => {

    //const isLogged = false
    const {isLogged, logOut} = useUser()
    const [match] = useRoute('/login/:type?')

    const handleLogOut = (e) => {
        e.preventDefault()
        logOut()
    }

    return(
        <header className="gf-header">
            {isLogged
                ?<>
                    <label className="logOut" onClick={handleLogOut}>Log out</label>
                </>
                :<>
                    {match
                        ? null
                        :<>
                            <Link to="/login/signin">
                                <label className="signIn">Sign in</label>
                            </Link>
                            <Link to="/login/signup">
                                <label className="signUp">Sign up</label>
                            </Link>
                        </>
                    }
                    
                </>
            }
            
        </header>
    )
}
export default Header