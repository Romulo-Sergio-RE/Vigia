import React from "react";
import { Link } from "react-router-dom";
import  * as S from "./styledHeader";

export const Header = () =>{
    return(
        <S.ContainerHeader>
            <S.ImgLogo src={require("../../assets/LogoVigiaBranco.png")}/>

            <S.ContainerNavegacao>
                <S.Li>
                    <Link to={"/sobre"}>Inicio</Link>
                </S.Li>
               <S.Li>
                    <S.Links href="$">Serviço</S.Links>
                </S.Li>
                <S.Li>
                    <S.Links href="$">Quem Somos</S.Links>
                </S.Li>
                <S.Li>
                    <S.Links href="$">Como funciona</S.Links>
                </S.Li>
                <S.Li>
                    <S.Links href="$">Fale Conosco</S.Links>
                </S.Li>
            </S.ContainerNavegacao>
        </S.ContainerHeader>
    );
};