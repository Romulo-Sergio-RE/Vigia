import styled from "styled-components";
interface colorsProps {
    color?: string,
    backColor?: string,
}
export const ContainerComoFunciona = styled.div<colorsProps>`
    width: 100%;
    height: 100vh;
    background: ${(props)=>props.backColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
export const ContainerTexto= styled.div<colorsProps>`
    display: flex;
    .containertexto{
        width: 30.625rem;
        margin: 3.75rem 1.563rem 1.563rem 1.563rem;
    }
    .texto{
        font-size: 1.5rem;
        line-height: 1.875rem;
        color: ${(props)=>props.color};
        margin: 0 1.563rem 1.563rem 1.563rem;
    }
    .imagem{
        width: 26.25rem;
        height: 25rem;
    }
`;