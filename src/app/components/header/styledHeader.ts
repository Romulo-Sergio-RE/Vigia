import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 5rem;
    background-color: rgba(18, 86, 42, 1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .imagem-logo{
        width: 5.938rem;
        height: 2.5rem;
    }
    .lista{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .lista-itens{   
        list-style: none;
        color: #FFFFFF;
        margin: 0 0.625rem;
        font-size: 1.25rem;
    }
    .botao-aplicativo{
        width: 10.625rem;
        height: 2.5rem;
        background-color: #F2F2F2;
        color: #12562A;
        font-size: 1.125rem;
        font-weight: bold;
        border-radius:  0.625rem;
        border: none;
        cursor: pointer;
        transition: all 1s;
        :hover{
            transform: scale(1.03);
        }
    }
`;