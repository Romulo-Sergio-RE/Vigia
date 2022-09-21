import styled from "styled-components";

export const ContainerFooter = styled.div`
    width: 100%;
    height: 21.875rem;
    background: #075F1E;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 3.125rem;
    .imagem-logo{
        width: 8.125rem;
        height: 3.75rem;
    }
    .appMobile{
        width: 8.125rem;
        height: 2.5rem;
    }
    @media only screen and (max-width: 768px) {
        .imagem-logo{
            width: 6.875rem;
            height: 3.125rem;
        }
    }
    @media only screen and (max-width: 640px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 375px) {
        height: 28rem;
        padding: 0.625rem;
        flex-direction: column;
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
        a{
            text-decoration: none;
            color: #f2f2f2;
        }
    }
    @media only screen and (max-width: 768px) {
        .lista-itens-titulo{
            font-size: 1.25rem;
        }
        .lista-itens{
            font-size: 1rem;
        }
    }
    @media only screen and (max-width: 375px) {
        flex-direction: column;
        .lista{
            margin: 0.625rem 1.875rem;
        }
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
    @media only screen and (max-width: 768px) {
        .appMobile{
            width: 8.125rem;
            height: 2.5rem;
        }
    }
    @media only screen and (max-width: 640px) {
        flex-direction: row;
        .appMobile{
            margin: 0 0.625rem;
        }
    }
    @media only screen and (max-width: 375px) {
        flex-direction: column;
        .appMobile{
            margin: 0.125rem 0;
        }
    }
`;