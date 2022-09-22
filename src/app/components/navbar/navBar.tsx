import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import  * as S from "./styledNavBar";

export const NavBar = () =>{
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const dispositivoMobileIOSouANDROID = ()=>{
        let userAgent = navigator.userAgent;
        if(userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i )){
            return "https://apps.apple.com/br/app/gconnect/id1051885508"
        }else{
            return "https://play.google.com/store/apps/details?id=br.com.getrak.gconnect"
        }
    }
    return(
        <S.ContainerNavBar>
        <nav className="navigation">
            <img className="brand-name" src={require("../../assets/image/logoVigiaBranco.png")} alt="logo-Vigia"/>
            <button 
                className="hamburger"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                  }
            >
                <ul>
                {window.screen.width <= 768?
                    <li><a target="_blank" rel="noreferrer" href={dispositivoMobileIOSouANDROID()}>Nosso Aplicativo</a></li>
                    :
                    null
                }
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/servico"}>Servicos</Link></li>
                    <li><Link to={"/quemSomos"}>Quem Somos</Link></li>
                    <li><Link to={"/comoFunciona"}>Como Funciona</Link></li>
                    <li><Link to={"/planos"}>Planos</Link></li>
                    <li><Link to={"/faleConosco"}>Fale Conosco</Link></li>
                
                </ul>
            </div>
            {window.screen.width > 768?
                <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://sistema.getrak.com/vigiarastreadores/mmanutencao/index"
                    ><button className="botao-aplicativo">Nosso Aplicativo</button>
                </a>
                :
                null
            }
            </nav>
        </S.ContainerNavBar>
    );
};