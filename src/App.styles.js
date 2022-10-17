import styled from "@emotion/styled"
import { Link } from "wouter"


export const App = styled.div`
    text-align: center;
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    cursor: pointer;
`

export const AppContent = styled.div`
    min-height: 100vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    padding: 16px;
    color: white;
`