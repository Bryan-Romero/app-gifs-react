import styled from "@emotion/styled"
import { Link } from "wouter"
import { buttons } from 'styles/styles'

export const Header = styled.header`
    width: 100%;
    height: 80px;
`

export const HeaderContent = styled.header`
    width: 80%;
    height: 100%;
    display: flex;
    margin: auto;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 15px;
`

export const Button = styled(Link)`
    ${props => buttons[props.type]}
    text-decoration: none;
`

export const ButtonLogout = Button.withComponent('label')

export const Picture = styled.picture`
    height: 100%;
    width: 100px;
    display: grid;
    place-content: center;
    margin-right: auto;
`

export const Img = styled.img`
    height: auto;
    width: 100px;
    cursor: pointer;
`

/*

.gf-header .signIn:hover, .signUp:hover, .logOut:hover {
    filter: brightness(110%);
}
*/
