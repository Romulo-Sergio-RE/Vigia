import React from "react";
import * as S from "./styled";

interface ITitulo {
    titulo: string;
    color: "verde" | "branco";
}

export const Titulo: React.FC<ITitulo> = (props) =>{
    return(
        <div>
            {props.color === "verde"?
                <S.Titulo>{props.titulo}</S.Titulo>
                :
                <S.TituloColorBranca>{props.titulo}</S.TituloColorBranca>
            }
        </div>
    );
};