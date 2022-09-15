import styled from "styled-components";

export const ContainerInicio = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const ContainerInfo = styled.div`
    width: 25rem;
    height: 18.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .logoVigia{
        width: 18.125rem;
        height: 4.375rem;
        margin: 0 1.25rem 0 0;
    }
    .subTitulo{
        font-size: 1.5rem;
        font-weight: bold;
        color: #12562A;
    }
    .texto{
        width: 22.5rem;
        font-size: 1.125rem;
        color: #000000;
        text-align: center;
    }
    .botaoSaibaMais{
        width: 15.625rem;
        height: 3.75rem;
        border-radius: 0.938rem;
        border: none;
        background-color: #12562A;
        box-shadow: 0.375rem 0 0.938rem rgba(0, 0, 0, 0.25);
        color: #f2f2f2;
        cursor: pointer;
        font-size: 1.25rem;
        font-weight: bold;
        transition: all 2s;
        :hover{
            transform: scale(1.02);
        }
    }
`;
export const ContainerImagem = styled.div`
    width: 28.75rem;
    height: 20.813rem;
    border-radius: 0.938rem;
    background-color: #12562A;
`;
