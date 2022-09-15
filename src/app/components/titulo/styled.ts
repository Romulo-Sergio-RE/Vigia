import styled from "styled-components";

interface TituloProps {
    tituloColor: string;
}
export const Titulo = styled.h3<TituloProps>`
    font-size: 2rem;
    font-weight: bold;
    color: ${(props)=>props.tituloColor};
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
    ::first-letter{
        text-transform: uppercase;
    }
`;