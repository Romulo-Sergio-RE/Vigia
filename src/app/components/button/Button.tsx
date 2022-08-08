import React from "react";
import  * as S from "./styled";

interface IInformacoesBTN {
    titulo: string;
    tamanho: "pequeno" | "grande";
    onClick:()=> void;
}

export const Button: React.FC<IInformacoesBTN> = (props) =>{
    return(
        <div>
            {props.tamanho === "pequeno"?
                <S.ContainerButtonPequeno>

                    <S.tituloPequeno onClick={props.onClick}>
                        {props.titulo}
                    </S.tituloPequeno>

                </S.ContainerButtonPequeno>
                :
                <S.ContainerButtonGrande>
                    <S.tituloGrande onClick={props.onClick}>
                        {props.titulo}
                    </S.tituloGrande>
                </S.ContainerButtonGrande>
            }           
        </div> 
    );
};