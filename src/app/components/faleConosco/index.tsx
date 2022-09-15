import React, { useState } from "react";
import { Formulario } from "../modalFormulario";
import { Titulo } from "../titulo/Titulo";
import * as S from "./styled";

export const FaleConosco = () =>{
    //https://api.whatsapp.com/send?phone=5585991870232"

    const [isOpenModal, setIsOpenModal] = useState(false)
    return(
        <S.ContainerFaleConosco>
            <Titulo titulo={"Fale Conosco"} color={"verde"} />

            <S.ContainerDadosParaContato>
                <div className="containerItens">
                    <img className="imagem-icone" src={require("../../assets/image/whatsapp.png")} alt="imagem-icone-whatsapp"/>
                    <h3 className="titulo-icone">(85) 99999-9999</h3>
                </div>
                <div className="containerItens">
                    <img className="imagem-icone" src={require("../../assets/image/gmail.png")} alt="imagem-icone-gmail"/>
                    <h3 className="titulo-icone">Vigia@gmail.com</h3>
                </div>
                <div className="containerItens">
                    <img className="imagem-icone" src={require("../../assets/image/instagram.png")} alt="imagem-icone-instagram"/>
                    <h3 className="titulo-icone">@vigiaveicular</h3>
                </div>
            </S.ContainerDadosParaContato>
            {isOpenModal?
                <Formulario onClose={setIsOpenModal}/>
                :
                null
            }
            <button className="botaoEnviarMensagem" onClick={()=>{setIsOpenModal(true)}}>Enviar Mensagem</button>
        </S.ContainerFaleConosco>
    );
};