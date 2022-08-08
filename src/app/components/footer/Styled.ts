import styled from "styled-components";

export const ContainerFooter = styled.div`
    width: 100%;
    height: 250px;
    background: #075F1E;
    display: flex;
    align-items:center;
    justify-content:space-around;
`;
export const Imagem = styled.img`
    width: 160px;
    height: 160px;
`;

export const Div = styled.div`
    display: flex;
    width: 50%;
    justify-content:space-evenly ;
`;

export const link = styled.a`
    text-decoration: none;
    color: #FFFFFF;
`;
export const ConteinerInfo = styled.div`
`;

export const InfoItens= styled.li`
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 10px;
    list-style: none;
    :first-child{
        font-size: 24px;
        font-weight:bold;
        margin-bottom: 20px;
    }
`;