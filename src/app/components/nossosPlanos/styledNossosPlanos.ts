import styled from "styled-components";

export const ContainerNossoPlanos = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #12562A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .card-plano{
        width: 21.875rem;
        height: 26.875rem;
        background-color: #f2f2f2;
        border-radius: 0.938rem;
        border: 0.25rem solid #f2f2f2;
        box-shadow: 0.375rem 0 0.938rem rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 1.875rem;
        color: #12562A;
    }
    .info-card{
        width: 18.75rem;
        margin-left: 1.875rem;
        .valorPlano{
            margin-left: 0.625rem;
        }
        h3{
            display: flex;
            align-items: center;
            margin: 0.625rem 0;
        }
    }
`;