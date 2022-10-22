import styled from "@emotion/styled"
import { Link as LinkWouter } from "wouter"
import { Form as FormFormik, Field, ErrorMessage as Invalid} from 'formik'

export const bps = {
    desktop: '@media screen and (min-width: 1024px)',
    tablet: '@media screen and (min-width: 767px) and (max-width: 1023px)',
    smartphone: '@media screen and (max-width: 767px)'
}

export const buttons = {
    primary: `
        cursor: pointer;
        padding: 8px;
        background-color: var(--brand-color_6);
        color: aliceblue;
        font-size: medium;
        font-weight: 600;
        &:hover {
            transform: scale(1.05);
        }
    `,
    secondary: `
        cursor: pointer;
        padding: 8px;
        background-color: var(--brand-color_4);
        color: aliceblue;
        font-size: medium;
        font-weight: 600;
        &:hover {
            transform: scale(1.05);
        }
    `
}


// FormItems 

export const Form = styled(FormFormik)`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid #fff;
    padding: 20px 0;
    &[disabled] {
        opacity: .3;
        pointer-events: none;
    }
`

export const Label = styled.label`
    margin: 0 20px;
    width: 1fr;
    text-align: left;
    display: flex;
    flex-direction: column;
    font-size: 25px;
    gap: 10px;
`

export const Input = styled(Field)`
    width: 1fr;
    font-size: large;
    color: white;
    background-color: black;
    padding: 8px;
    ${props => props.errors ? 'border: 1px solid rgb(160, 50, 50);' : 'border: none;'}
    &::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }
    &:hover{
        filter: brightness(120%);
    }
    &:focus{
        outline: none;
    }
`

export const Button = styled.button`
    width: 1fr;
    cursor: pointer;
    border: none;
    padding: 8px;
    background-color: var(--brand-color_6);
    font-size: 25px;
    color: aliceblue;
    font-size: large;
    font-weight: 600;
    margin: 0 20px;
    &:hover{
        filter: brightness(120%);
    }
    &[disabled] {
        opacity: .3;
        pointer-events: none;
    }
`

export const ErrorMessage = styled(Invalid)`
    color: rgb(160, 50, 50); 
    text-align: left;
    font-size: small;
    font-weight: 600;
`

export const AccountDiv = styled.div`
    max-width: 400px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid #fff;
    margin-top: 20px;
    padding: 20px 0;
`

export const Text = styled.p`
    margin: 0 20px;
    text-align: center;
    font-size: medium;
`

export const Link = styled(LinkWouter)`
    color: #58a6ff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
