import React from "react";
import { Link } from "react-router-dom";
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
                    <li className="lista-itens"><Link className="link" to={"/quemSomos"}>Quem Somos</Link></li>
                    <li className="lista-itens"><Link className="link" to={"/comoFunciona"}>Como Funciona</Link></li>
                </ul>
                <ul className="lista">
                    <li className="lista-itens-titulo">Fale Conosco</li>
                    <li className="lista-itens"><a rel="noreferrer" href="https://api.whatsapp.com/send?phone=5585991870232" target="_blank">(85) 99187-0232</a></li>
                    <li className="lista-itens"><a rel="noreferrer" href="https://instagram.com/vigiaveicular?igshid=YmMyMTA2M2Y=" target="_blank">@vigiaveicular</a></li>
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