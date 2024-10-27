import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    background-color: #0173DF;
    height: 100vh;

    button {
        /* background-color: #25CD89; */
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;

        background-color: #FF2193;
    }
`

export const Termos = styled.div`
    background-color: #FF2193;
    padding: 10px;
    margin-bottom: 1px;
    text-align: center;
    color: #FFF;

    border-radius: 25px;
`

export const Card = styled.div`
    width: 30vw;
    height: 80vh;

    /* background-color: yellow; */
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;

    button {
        max-width: min-content;
    }
    
`

export const Form = styled.div`
    min-height: 100%;
    background-color: #EAECF4;
    border-radius: 25px;
    padding: 25px;

    /* img {
        width: 100%;
    } */
`

