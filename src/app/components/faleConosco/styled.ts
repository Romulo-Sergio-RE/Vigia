import styled from "styled-components";

export const ContainerFaleConosco = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .botaoEnviarMensagem{
        width: 21.875rem;
        height: 5rem;
        background-color: #12562A;
        color: #f2f2f2;
        font-size: 1.5rem;
        font-weight: bold;
        border: none;
        border-radius: 0.938rem;
        box-shadow: 0 0.375rem 0.938rem rgba(0, 0, 0, 0.25);
        cursor: pointer;
        transition: all 1s;
        :hover{
            transform: scale(1.03);
        }
    }
`;
export const ContainerDadosParaContato = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-around;
    .containerItens{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .titulo-icone{
        font-size: 1.5rem;
        font-weight: bold;
        color: #12562A;
        a{
            text-decoration: none;
            color: #12562A;
        }
    }
    .imagem-icone{
        width: 5rem;
        height: 5rem;
        margin: 0 1.875rem;
    }
`;
