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
        width: 30.625rem;
        font-size: 1.5rem;
        line-height: 1.875rem;
        text-align: center;
        color: #12562A;
    }
    .imagem{
        width: 34.375rem;
        height: 21.25rem;
        background-color: #12562A;
        margin: 0 3.125rem;
    }
`;