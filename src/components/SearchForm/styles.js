import styled from "@emotion/styled"
import { buttons } from "styles/styles"


export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const SearchInput = styled.input`
    max-width: 500px;
    font-size: large;
    color: white;
    background-color: black;
    border: none;
    padding: 8px;
    &:hover{
        filter: brightness(120%);
    }
    &:focus{
        outline: none;
    }
`

export const SearchButton = styled.button`
    width: 1fr;
    cursor: pointer;
    border: none;
    padding: 8px;
    background-color: var(--brand-color_6);
    font-size: 25px;
    color: aliceblue;
    font-size: large;
    font-weight: 600;
    &:hover{
        filter: brightness(120%);
    }
`

/*
Desktop
@media screen and (min-width: 1024px) {
    form {
        flex-direction: row;
    }
}

Tablet
@media screen and (min-width: 767px) and (max-width: 1023px) {
    form {
        flex-direction: row;
    }
}

Smartphone
@media screen and (max-width: 767px) {
    form {
        flex-direction: column;
    }
}
*/