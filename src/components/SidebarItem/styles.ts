import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        margin: 15px 0;

        a {
            flex-direction: column;
            /* padding-left: 25px; */
            align-items: center;
            max-width: fit-content;
            gap: 5px;

        }
    }
`;

export const Info = styled.div`
    flex: 1;
    /* margin-right: 20px; */
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #FFF;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const IconArea = styled.div<{ active: boolean;}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;
    
    .icon {
        color: white;
    }
`;

export const Point = styled.div<{ active: boolean;}>`
    width: 10px;
    height: 10px;
    border: 2px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#25CD89' : '#02044A'};

    @media (max-width: 768px) {
        display: none;
    } 
`;