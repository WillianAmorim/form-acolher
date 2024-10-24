import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


export const Container = styled.div`
    background-image: linear-gradient(to bottom right, #ee2068, #008cad);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    width: 25%;
    height: 450px;
    border-radius: 25px;
    /* background-color: rgba(0, 0, 0, 0.3);  */
    background-color: rgba(255, 255, 255, 0.2); 
    padding-bottom: 50px;
    
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const DivHeader = styled.div`

    /* background-color: rgba(164, 164, 164, 0.2); */
    background-color: rgba(255, 255, 255, 0.5);
    /* background-color: #FFF; */
    border-radius: 25px 25px 0 0;
    padding: 15px;
    text-align: center;
    color: #FFF;
    
    img {
        @media (max-width: 768px) {
            width: 200px;
        }
    }
`

export const DivInputs = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 50px;
    padding: 25px;
    padding-top: 45px;

    @media (max-width: 768px) {
    }
`

export const DivInput = styled.div`
    display: flex;

    /* background-color: yellow; */
    padding: 5px 5px;
    align-items: center;
    border-bottom: 1px solid #FFF;
    padding-bottom: 1px;

    input {
        padding: 10px 5px;
        background-color: transparent;
        border: none;
        color: #FFF;
        padding-left: 10px;

    }

    input:focus {
        outline: none;
        box-shadow: none;
    }

    input::placeholder {
        color: #FFF;
    }
`

export const IconStyleLogin = styled(MdEmail)`
    color: #FFF;  /* Define a cor */
    font-size: 20px; /* Define o tamanho */
`;

export const IconStylePassword = styled(RiLockPasswordFill)`
    color: #FFF;  /* Define a cor */
    font-size: 20px; /* Define o tamanho */
`;

export const Button = styled.button`
    align-self: center;
    padding: 20px 40px;
    background-color: #FF2193;
    border-radius: 25px;
    border: none;
    color: #FFF;
`
