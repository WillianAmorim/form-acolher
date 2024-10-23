import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 0;
    border-bottom: 1px solid #FFF;

    @media (max-width: 768px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 5px;
    } 

    h1 {
        margin: 0;
        padding: 0;
        font-size: 28px;

        @media (max-width: 768px) {
            font-size: 20px;
        } 
    }

    p {
        font-size: 14px;
        /* color: #B8B8D4; */
        color: #FFF;

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }
`