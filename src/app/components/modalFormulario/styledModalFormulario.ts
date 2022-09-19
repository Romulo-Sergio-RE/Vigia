import styled from "styled-components";

export const ContainerModal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`;
export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 35.625rem;
    height: 31.25rem;
    background: #12562A;
    border-radius: 0.938rem;
    .titulos{
        width: 32.188rem;
        display: flex;
        align-items: center;
        justify-content: right;
    }
    .iconeBotao{
        margin: 0 3.125rem;
        cursor: pointer;
    }
    .container-inputs{
        label{
            display: block;
            color: #f2f2f2;
            margin: 0.5rem 0;
            font-size: 1.125rem;
        }
        input{
            width: 17.5rem;
            height: 2.813rem;
            border-radius: 0.75rem;
            padding: 0 0 0 0.625rem;
            border: none;
            :focus{
                border: 0.125rem solid rgba(0, 0, 0, 0.8);
                box-shadow: 0 0 0 0;
                outline: 0;
            }
        }
        textarea{
            display: block;
            width: 17.5rem;
            height: 5.625rem;
            resize: none;
            border: none;
            border-radius: 0.5rem;
            padding: 0.625rem 0 0 0.625rem;
            :focus{
                border: 0.125rem solid rgba(0, 0, 0, 0.8);
                box-shadow: 0 0 0 0;
                outline: 0;
            }
        }
    }
    .botao-formulario{
        width: 220px;
        height: 3.125rem;
        background-color: #f2f2f2;
        color: #12562A;
        border: none;
        border-radius: 0.75rem;
        box-shadow: 0.375rem 0 0.938rem rgba(0, 0, 0, 0.25);
        font-size: 1.25rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 1s;
        :hover{
            transform: scale(1.03);
        }
    }
`;