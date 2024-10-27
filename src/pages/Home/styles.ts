import styled from "styled-components";

export const Container = styled.div`
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .bounce-icon {
        animation: bounce 1.5s ease-in-out infinite;
    }
`

export const DivImage = styled.div`
    img {
        max-width: 100vw;
        display: block;
    }

    
`

export const DivIcons  = styled.div `
    display: flex;
    gap: 5px;
    justify-content: flex-end;
    background-color: #FF2193;
    height: 25px;
    align-items: center;
    padding: 20px 25px;
`

export const SectionItens = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    gap: 20px;

    @media (max-width: 768px) {
        padding-top: 100px;
    }

    h1 {
        color: #004AAD;
        font-family: 'Chewy', sans-serif;
        font-weight: 400;
    }

    p {
        color: #FF2193;
        font-family: 'Chewy', sans-serif;
    }

    a {
        background-color: #FF2193;
        padding: 20px 25px;
        color: #FFF;
        font-family: 'Chewy', sans-serif;
        font-size: 25px;
        border-radius: 25px;
    }
`

