import React from "react";
import  * as S from "./styledHeader";

export const Header = () =>{
    const dispositivoMobileIOSouANDROID = ()=>{
        let userAgent = navigator.userAgent;
        if(userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i )){
            return "https://apps.apple.com/br/app/gconnect/id1051885508"
        }else{
            return "https://play.google.com/store/apps/details?id=br.com.getrak.gconnect"
        }
    }
    return(
        <S.ContainerHeader>
            <img className="imagem-logo" src={require("../../assets/image/logoVigiaBranco.png")} alt="logo-Vigia"/>

            <ul className="lista">
                <li className="lista-itens">Inicio</li>
                <li className="lista-itens">Servicos</li>
                <li className="lista-itens">Quem Somos</li>
                <li className="lista-itens">Como Funciona</li>
                <li className="lista-itens">Plano</li>
                <li className="lista-itens">Fale Conosco</li>
            </ul>
            {window.screen.width <= 425?
                <a 
                    target="_blank" 
                    rel="noreferrer"
                    href={dispositivoMobileIOSouANDROID()}
                    ><button className="botao-aplicativo">Nosso Aplicativo2</button>
                </a>
                :
                <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://sistema.getrak.com/vigiarastreadores/mmanutencao/index"
                    ><button className="botao-aplicativo">Nosso Aplicativo</button>
                </a>
            }
        </S.ContainerHeader>
    );
};