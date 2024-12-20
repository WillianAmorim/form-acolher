import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 0;
    border-bottom: 1px solid #FFF;

    @media (max-width: 768px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 5px;

        padding: 15px 0;
    } 

    h1 {
        margin: 0;
        padding: 0;
        font-size: 28px;
        font-weight: bold;

        @media (max-width: 768px) {
            font-size: 25px;
        } 
    }

    p {
        font-size: 18px;
        /* color: #B8B8D4; */
        color: #FFF;
        font-weight: bold;

        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
`