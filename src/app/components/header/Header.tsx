import React from "react";
import { Link } from "react-router-dom";
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
                <li className="lista-itens"><Link className="link" to={"/"}>Inicio</Link></li>
                <li className="lista-itens"><Link className="link" to={"/servico"}>Servicos</Link></li>
                <li className="lista-itens"><Link className="link" to={"/quemSomos"}>Quem Somos</Link></li>
                <li className="lista-itens"><Link className="link" to={"/comoFunciona"}>Como Funciona</Link></li>
                <li className="lista-itens"><Link className="link" to={"/planos"}>Planos</Link></li>
                <li className="lista-itens"><Link className="link" to={"/faleConosco"}>Fale Conosco</Link></li>
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