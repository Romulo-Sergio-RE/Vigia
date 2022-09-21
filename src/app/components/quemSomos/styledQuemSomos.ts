import styled from "styled-components";

export const ContainerQuemSomos = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`;
export const ContainerInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .texto{
        width: 35rem;
        font-size: 1.5rem;
        text-align: center;
        color: #12562A;
    }
    .imagem{
        width: 34.375rem;
        height: 21.25rem;
        margin: 0 3.125rem;
    }
    @media only screen and (max-width: 1024px) {
        .imagem{
            width: 26.875rem;
            height: 16.25rem;
            margin: 0;
        }
        .texto{
            width: 23rem;
            font-size: 1.25rem;
        }
    }
    @media only screen and (max-width: 1024px) {
        flex-direction: column-reverse;
        .imagem{
            width: 21.875rem;
            height: 13.75rem;
            margin: 0;
        }
        .texto{
            width: 25rem;
            font-size: 1.125rem;
        }
    }
    @media only screen and (max-width: 390px) {
        .imagem{
            width: 18.75rem;
            height: 12.5rem;
        }
        .texto{
            width: 18rem;
            font-size: 1rem;
        }
    }
`;