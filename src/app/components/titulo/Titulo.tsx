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
                <S.Titulo tituloColor={"#12562A"}>{props.titulo}</S.Titulo>
                :
                <S.Titulo tituloColor={"#f2f2f2"}>{props.titulo}</S.Titulo>
            }
        </div>
    );
};