import React from "react";
import  * as S from "./StyledCard";

interface IInformacoesCard {
    tituloCard: string;
    textoCard: string;
}

export const Card: React.FC<IInformacoesCard> = (props) =>{
    return(
        
        <S.ContainerCard>

            <S.TituloCard>{props.tituloCard}</S.TituloCard>

            <S.TextoCard>{props.textoCard}</S.TextoCard>
        
        </S.ContainerCard>
        
    );
};