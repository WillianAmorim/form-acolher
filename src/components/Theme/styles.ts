import styled from "styled-components";

export const Container = styled.div`
    background-color: #02044A;
    color: #FFF;
    min-height: 100vh;

    @media only screen and (max-width: 768px) {
        padding: 0px 25px 25px 25px;
    }
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Steps = styled.div`
    flex: 1;
    display: flex;
    

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }

`

export const Sidebar = styled.div`
    max-width: max-content;
    border-right: 1px solid #16195c;

    @media only screen and (max-width: 768px) {
        display: flex;
        max-width: 100vw;
        justify-content: space-evenly;
    }

`

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;

    @media only screen and (max-width: 768px) {
        padding-left: 0px;
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
    }
`