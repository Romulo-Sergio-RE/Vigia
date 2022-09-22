import styled from "styled-components";

export const ContainerNossoAplicativo = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .imagemNossoAplicativo{
        width: 43.75rem;
        height: 31.25rem;
        margin: 0 3.75rem 0 0;
    }
    @media only screen and (max-width: 650px) {
        .imagemNossoAplicativo{
            width: 31.25rem;
            height: 18.75rem;
        }
    }
    @media only screen and (max-width: 440px) {
        .imagemNossoAplicativo{
            width: 23rem;
            height: 18.75rem;
        }
    }
    @media only screen and (max-width: 425px) {
        .imagemNossoAplicativo{
            width: 25rem;
            height: 18.75rem;
        }
    }
    @media only screen and (max-width: 375px) {
        .imagemNossoAplicativo{
            width: 20.625rem;
            height: 18.75rem;
        }
    }
`;
