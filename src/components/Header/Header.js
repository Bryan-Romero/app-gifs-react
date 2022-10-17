import useUser from "hooks/useUser";
import React from "react";
import { Link, useRoute } from "wouter";
import { Header as HeaderComponet, Button, ButtonLogout, HeaderContent } from './styles'

const Header = () => {

    //const isLogged = false
    const {isLogged, logOut} = useUser()
    const [match] = useRoute('/login/:type?')

    const handleLogOut = (e) => {
        e.preventDefault()
        logOut()
    }

    return(
        <HeaderComponet className="gf-header">
            <HeaderContent>
                {isLogged
                    ?<>
                        <ButtonLogout className="logOut" onClick={handleLogOut}>Log out</ButtonLogout>
                    </>
                    :<>
                        {match
                            ? null
                            :<>
                                <Button type={'primary'} to="/login/signin">
                                    Sign in
                                </Button>
                                <Button type={'primary'} to="/login/signup">
                                    Sign up
                                </Button>
                            </>
                        }
                        
                    </>
                }
            </HeaderContent>
        </HeaderComponet>
    )
}
export default Header