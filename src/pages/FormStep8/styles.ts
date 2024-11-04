import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 18px;
        /* color: #B8B8D4; */
        color: #FFF;
        font-weight: bold;

        @media (max-width: 768px) {
            padding-top: 25px;
        } 
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr {
        height: 1px;
        border: 0;
        /* background-color: #16195C; */
        background-color: #FFF;
        margin: 30px 0;
    }

    label {
        font-size: 15px;
        display: block;
        margin-bottom: 20px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
        }
    }

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

    .backButton {
        font-size: 14px;
        text-decoration: none;
        padding: 20px 40px;
        color: #FFF;
        padding: 20px 40px;
        font-weight: bold;
        border: 0;
        cursor: pointer;
        margin-top: 30px;
        border-radius: 30px;
        margin-right: 10px;
        background-color: #494A7C;
    }
`