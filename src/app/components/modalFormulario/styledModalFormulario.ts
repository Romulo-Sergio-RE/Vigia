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
    width: 570px;
    height: 500px;
    background: #12562A;
    border-radius: 15px;
    .titulos{
        width: 515px;
        display: flex;
        align-items: center;
        justify-content: right;
    }
    .iconeBotao{
        margin: 0 50px;
        cursor: pointer;
    }
    .container-inputs{
        label{
            display: block;
            color: #f2f2f2;
            margin: 8px 0;
            font-size: 18px;
        }
        input{
            width: 280px;
            height: 45px;
            border-radius: 12px;
            padding: 0 0 0 10px;
            border: none;
            :focus{
                border: 0.125rem solid rgba(0, 0, 0, 0.8);
                box-shadow: 0 0 0 0;
                outline: 0;
            }
        }
        textarea{
            display: block;
            width: 280px;
            height: 90px;
            resize: none;
            border: none;
            border-radius: 8px;
            padding: 10px 0 0 10px;
            :focus{
                border: 0.125rem solid rgba(0, 0, 0, 0.8);
                box-shadow: 0 0 0 0;
                outline: 0;
            }
        }
    }
    .botao-formulario{
        width: 220px;
        height: 50px;
        background-color: #f2f2f2;
        color: #12562A;
        border: none;
        border-radius: 12px;
        box-shadow: 6px 0 15px rgba(0, 0, 0, 0.25);
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: all 1s;
        :hover{
            transform: scale(1.03);
        }
    }
`;