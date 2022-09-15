import styled from "styled-components";

export const ContainerFooter = styled.div`
    width: 100%;
    height: 16.875rem;
    background: #075F1E;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .imagem-logo{
        width: 8.125rem;
        height: 3.75rem;
    }
    .appMobile{
        width: 8.125rem;
        height: 2.5rem;
    }
`;
export const ContainerInfo = styled.div`
    display: flex;
    .lista{
        list-style: none;
        color: #FFFFFF;
        margin: 0 1.875rem;
    }
    .lista-itens-titulo{
        font-size: 1.5rem;
        margin: 0 0 0.938rem 0;
    }
    .lista-itens{
        font-size: 1.125rem;
        margin: 0 0 0.5rem 0;
    }
`;
export const ContainerAppMobile = styled.div`
    display: flex;
    flex-direction: column;
    .appMobile{
        width: 8.125rem;
        height: 2.5rem;
        margin: 0.188rem 0;
    }
`;