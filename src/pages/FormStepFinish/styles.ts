import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    background-color: #0173DF;
    height: 100vh;

    
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
    min-width: 30vw;
    height: 80vh;

    @media (max-width: 768px) {
        min-width: 90vw;
    }

    /* background-color: yellow; */
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    gap: 5px;

    align-items: center;


    /* background-color: rebeccapurple; */


    .checkbox {
        display: flex;
        gap: 5px;
        align-self: flex-start;
    }

    label {
        display: flex;
        gap: 5px;
    }

    button {
        max-width: min-content;
    }

    #temos-esclarecimento {
        text-decoration: underline;
    }

    /* .loading{
        align-self: center;
        margin-top: 25px;
    } */

    @keyframes spinner {
        to {transform: rotate(360deg);}
    }
    #spinner {
        /* content: ''; */
        /* box-sizing: border-box; */
        /* position: absolute; */
        /* top: 20%; */
        /* left: 20%; */
        display: none;
        width: 40px;
        height: 40px;
        margin-top: 50px;
        /* margin-left: 0px; */
        border-radius: 50%;
        border: 2px solid #ccc;
        border-top-color: #333;
        animation: spinner .6s linear infinite;
        /* align-self: center; */

        /* display: flex; */
        gap: 5px;
        /* justify-content: flex-start; */
        /* align-self: flex-start; */
    }

    .display-flex-class {
        display: flex !important; 
    }
    
`

export const Form = styled.div`
    min-height: 100%;
    background-color: #EAECF4;
    border-radius: 25px;
    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 50px;

    img {
        width: auto;
        height: 200px;

        margin-top: 50px;
    }
`

export const Button = styled.button`
    /* background-color: #25CD89; */
    background-color: ${(props => props.disabled ? '#ccc' : '#FF2193')}; /* Cinza se desabilitado, azul se habilitado */
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;

    /* display: none; */
`

export const DivPoupop = styled.div`
    position: absolute;

    background-color: white;
    width: 350px;
    padding: 25px;
    border-radius: 25px;
    left: 510px;
`

export const ContainerSenha = styled.div`
    display: none;
`

export const ContainerSpinner = styled.div`
    /* @keyframes spinner {
        to {transform: rotate(360deg);}
    }
    .spinner:before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 20%;
        left: 20%;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 2px solid #ccc;
        border-top-color: #333;
        animation: spinner .6s linear infinite;
    } */
`

