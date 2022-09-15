import styled from "styled-components";


export const ContainerGridCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 3.438rem;
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 1.25rem;
    row-gap: 3.125rem;
`;