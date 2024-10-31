import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        /* color: #B8B8D4; */
        color: #FFF;

        @media (max-width: 768px) {
            margin: 15px 0;

            a {
                flex-direction: column;
                align-items: center;
                max-width: fit-content;
                gap: 5px;

            }
        }
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;

        @media (max-width: 768px) {
            font-size: 20px;
            padding: 5px;
        } 
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #FFF;
        margin: 30px 0;

        @media (max-width: 768px) {
            margin: 15px 0;
        }
    }

    label {
        font-size: 13px;

        input, select {
            /* display: flex; */
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 1px solid rgba(255,255,255,0.2);
            /* border: none; */
            border-radius: 10px;
            color: #FFF;
            background-color: #0173DF;
            outline: 0;
            font-size: 15px;
            /* background-color:rgba(255,255,255,0.2); */

            @media (max-width: 768px) {
                padding: 10px 5px;
            } 
        }

    }

    button {
        background-color: #FF2193;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
`

export const ErrorMessage = styled.span`
    display: inline-block;
    margin-top: 5px;
    color: #A20100; // Cor da mensagem de erro
    font-size: 0.9em; // Tamanho da fonte (opcional)
    background-color: #F7BABB;
    padding: 5px;
    border-radius: 6px;
`;