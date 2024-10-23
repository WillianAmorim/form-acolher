import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
    display: flex;
    /* border: 2px solid ${props => props.selected ? '#25CD89' : 'rgba(255,255,255,0.2)'}; */
    background-color: ${props => props.selected ? '#F977B7' : 'rgba(255,255,255,0.2)'};
    border-radius: 10px;
    border: none;
    padding: 20px;
    margin-top: 7px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        padding: 10px
    }

    &:hover {
        /* border: 2px solid #496459; */
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;

    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`

export const Description = styled.div`
    font-size: 14px;
    color: #B8B8D4;
`   