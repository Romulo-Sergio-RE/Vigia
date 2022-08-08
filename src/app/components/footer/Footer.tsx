import React from "react";
import  * as S from "./Styled";


export const Footer = () =>{
    return(
        
    <S.ContainerFooter>
            <S.Imagem src={require("../../assets/LogoVigiaBranco.png")}/>

            <S.Div>
                <S.ConteinerInfo>
                    <ul>
                        <S.InfoItens>Sobre</S.InfoItens>
                        <S.InfoItens>Quem somos</S.InfoItens>
                        <S.InfoItens>Como funciona</S.InfoItens>
                    </ul>
                </S.ConteinerInfo>


                <S.ConteinerInfo>
                    <ul>
                        <S.InfoItens>Fale Conosco</S.InfoItens>
                            <S.InfoItens>
                                <S.link href="https://api.whatsapp.com/send?phone=5585991870232">(85) 99187-0232</S.link>
                            </S.InfoItens>
                        <S.InfoItens>vigia@gmail.com</S.InfoItens>
                    </ul>
                </S.ConteinerInfo>

                <S.ConteinerInfo>
                    <ul>
                        <S.InfoItens>Redes Sociais</S.InfoItens>
                        <S.InfoItens>Instagram</S.InfoItens>
                    </ul>
                </S.ConteinerInfo>
            </S.Div>

    </S.ContainerFooter>
        
    );
};