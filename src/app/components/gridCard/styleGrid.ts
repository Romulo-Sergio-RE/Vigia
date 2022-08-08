import styled from "styled-components";


export const ContainerGridCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 55px;
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 20px;
    row-gap: 50px;
`;