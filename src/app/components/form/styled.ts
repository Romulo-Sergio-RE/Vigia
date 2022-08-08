import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    width: 500px;
    height: 500px;
    background: orange;
    border-radius: 20px;
`;
export const InputForm = styled.input`
    display: block;
    width: 280px;
    height: 40px;  
    margin-top: 8px;
    border: none;
    border-radius: 8px;
`;
export const TextareaForm = styled.textarea`
    display: block;
    width: 280px;
    height: 80px;
    margin-top: 8px;
    resize: none;
    border: none;
    border-radius: 8px;
`;
