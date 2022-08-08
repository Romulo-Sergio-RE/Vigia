import React from "react";
import { Button } from "../button/Button";
import { Titulo } from "../titulo/Titulo";
import * as S from "./styled";

export const FaleConosco = () =>{
    return(
        <S.ContainerFaleConosco>
            <Titulo titulo={"Fale Conosco"} color={"verde"} />

            <S.Contatos>
                <S.InfoContatos>
                    <S.Imagem src={require("../../assets/whatsapp.png")}/>

                    <S.InfoContatosTitulos>
                        <S.link href="https://api.whatsapp.com/send?phone=5585991870232">(85) 99187-0232</S.link>
                    </S.InfoContatosTitulos>
                </S.InfoContatos>

                <S.InfoContatos>
                    <S.Imagem src={require("../../assets/gmail.png")}/>
                    
                    <S.InfoContatosTitulos>
                        Vigia@gmail.com
                    </S.InfoContatosTitulos>
                </S.InfoContatos>

                <S.InfoContatos>
                    <S.Imagem src={require("../../assets/instagram.png")}/>
                    
                    <S.InfoContatosTitulos>
                        @vigia
                    </S.InfoContatosTitulos>
                </S.InfoContatos>
            </S.Contatos>

            <Button 
                titulo={"Enviar Mensagem"} 
                tamanho={"grande"} 
                onClick={()=>{alert("teste")}}
            />
        </S.ContainerFaleConosco>
    );
};