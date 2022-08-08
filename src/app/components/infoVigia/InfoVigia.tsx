import React from "react";
import { Button } from "../button/Button";
import { Titulo } from "../titulo/Titulo";
import * as S from "./styled";

interface IInfoVigia{
    titulo: string;
    tituloBTN: string;
    texto: string;
    imagem: string;
    fundo: "verde" | "";
}

export const InfoVigia: React.FC<IInfoVigia> = (props) =>{
    return(
        <S.ContainerPrincipal>
            {props.fundo === "verde"?
                <S.ContainerInfoFundoVerde>

                    <S.ContainerTituloTexto>
                        <Titulo 
                            titulo={props.titulo} 
                            color={"branco"}
                        />
                        <S.TextoFundoVerde>{props.texto}</S.TextoFundoVerde>
                        
                    </S.ContainerTituloTexto>

                    <S.Imagem src={`${props.imagem}`}/>

                </S.ContainerInfoFundoVerde>
                :
                <S.ContainerInfo>

                    <S.ContainerTituloTexto>
                        <Titulo 
                            titulo={props.titulo} color={"verde"}   
                        />
                        <S.Texto>{props.texto}</S.Texto>
                        <Button 
                            titulo={props.tituloBTN} 
                            tamanho={"pequeno"} 
                            onClick={()=>{}} 
                        />
                    </S.ContainerTituloTexto>

                    <S.Imagem src={props.imagem}/>

                </S.ContainerInfo>
            }
        
        </S.ContainerPrincipal>
    );
};