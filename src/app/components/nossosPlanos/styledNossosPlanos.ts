import styled from "styled-components";

export const ContainerNossoPlanos = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #345830;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media only screen and (max-width: 425px){
        height: 50rem;
    }
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
        border: 0.25rem solid #3E8914;
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
    @media only screen and (max-width: 768px) {
        .card-plano{
            width: 18.75rem;
            height: 26.875rem;
        }
        .info-card{
            width: 18.75rem;
            margin-left: 0;
            padding: 0.625rem;
            .valorPlano{
                margin-left: 0.625rem;
            }
            h3{
                margin: 0.625rem 0;
            }
        }
    }
    @media only screen and (max-width: 640px) {
        .card-plano{
            width: 15.625rem;
            height: 23.75rem,;
        }
        .info-card{
            width: 16rem;
            h3{
                font-size: 1rem;
            }
            h2{
                font-size: 1.375rem;
            }
        }
    }
    @media only screen and (max-width: 550px) {
        flex-direction: column;
        .teste{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .card-plano{
            width: 25rem;
            height: 14.375rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 0.313rem 0;
            h1{
                font-size: 1.625rem;
                margin: 0.313rem 0 0 0 ;
            }
        }
        .info-card{
            width: 11.5rem;
            padding: 0.625rem 0;
            margin: 0 0.5rem;
            h3{
                font-size: 1rem;
            }
            h2{
                font-size: 1.25rem;
            }
        }
    }
    @media only screen and (max-width: 425px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .card-plano{
            width: 18rem;
            height: 20rem;
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
            h1{
                font-size: 1.5rem;
            }
        }
        .teste{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .info-card{
            width: 18.75rem;
            margin-left: 1.875rem;
            .valorPlano{
                margin-left: 0.625rem;
            }
            h2{
                font-size: 1.125rem;
            }
            h3{
                display: flex;
                align-items: center;
                margin: 0.625rem 0;
                font-size: 1rem;
            }
        }
    }
    @media only screen and (max-width: 375px){
        height: 50rem;
        .card-plano{
            width: 15rem;
            height: 21rem;
        }
        .info-card{
            width: 13.2rem;
            margin-left: 1rem;
        }
    }
`;