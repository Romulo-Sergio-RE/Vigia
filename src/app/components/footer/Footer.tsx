import React from "react";
import  * as S from "./Styled";

export const Footer = () =>{
    return(
        <S.ContainerFooter>
            <img 
                className="imagem-logo" 
                src={require("../../assets/image/logoVigiaBranco.png")}
                alt="logo-vigia"
            />

            <S.ContainerInfo>
                <ul className="lista">
                    <li className="lista-itens-titulo">Sobre</li>
                    <li className="lista-itens">Quem Somos</li>
                    <li className="lista-itens">Como Funciona</li>
                </ul>
                <ul className="lista">
                    <li className="lista-itens-titulo">Fale Conosco</li>
                    <li className="lista-itens">(85) 9999-9999</li>
                    <li className="lista-itens">Vigia@gmail.com</li>
                </ul>
            </S.ContainerInfo>

            <S.ContainerAppMobile>
                <a href="https://apps.apple.com/br/app/gconnect/id1051885508"  rel="noreferrer" target={"_blank" }>
                    <img 
                        className="appMobile" 
                        src={require("../../assets/image/appStore.png")}
                        alt="logo-vigia"
                    />
                </a>
                <a href="https://play.google.com/store/apps/details?id=br.com.getrak.gconnect"  rel="noreferrer" target={"_blank" }>
                    <img 
                        className="appMobile" 
                        src={require("../../assets/image/googlePlay.png")}
                        alt="logo-vigia"
                    />
                </a>
            </S.ContainerAppMobile>
        </S.ContainerFooter>        
    );
};