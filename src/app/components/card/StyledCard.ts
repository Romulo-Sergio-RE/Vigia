import styled from "styled-components";


export const ContainerCard = styled.div`
    display: block;
    align-items: center;
    width: 19rem;
    height: 16rem;
    background: #345830;
    border-radius: 0.938rem;
    box-shadow: 0.5rem 0 1.25rem rgba(0, 0, 0, 0.35);
    margin-bottom: 1.25rem;
`;
export const TituloCard = styled.h3`
    font-size: 1.5rem;
    color: #FFFFFF;
    text-align: center;
    margin-top: 2.5rem;
`;
export const TextoCard = styled.p`
    font-size: 1.125rem;
    color: #FFFFFF; 
    text-align: left;
    padding: 1.875rem 2.188rem;
    line-height: 1.4rem;
    @media only screen and (max-width: 770px) {
        text-align: center;
    }
`;