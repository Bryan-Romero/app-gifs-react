import useUser from "hooks/useUser";
import React from "react";
import { Link, useRoute } from "wouter";
import logo from 'images/logo.png'
import { Header as HeaderComponet, Button, ButtonLogout, HeaderContent, Picture, Img} from './styles'

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
                <Picture>
                    <Link to={'/'}>
                        <Img src={logo}></Img>
                    </Link>
                </Picture>
                {isLogged
                    ?<>
                        <ButtonLogout type={'primary'} onClick={handleLogOut}>Log out</ButtonLogout>
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