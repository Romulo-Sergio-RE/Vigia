import React from "react";
import  * as S from "./styledHeader";

export const Header = () =>{
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
                    href="https://sistema.getrak.com/vigiarastreadores/mmanutencao/index"
                    ><button className="botao-aplicativo">Nosso Aplicativo</button>
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