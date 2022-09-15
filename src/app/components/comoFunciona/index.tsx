import React from "react";
import { Titulo } from "../titulo/Titulo";
import  * as S from "./StyledComoFunciona";

export const ComoFunciona = () =>{
    return(
        <S.ContainerComoFunciona>
            <Titulo color="branco" titulo="Como Funciona"/>
            <S.ContainerTexto>
                <div className="containertexto">
                    <p className="texto"> 
                        Nossa tecnologia funciona através de um dispositivo 
                        que é instalado em um local estratégico do seu veículo 
                        ou do veículo da sua empresa. 
                    </p>
                    <p className="texto"> 
                        Você poderá então acessar as informações 
                        emitidas pelo rastreador através do nosso aplicativo 
                        ou plataforma na web, e através disso, controlar os 
                        percursos que o seu veículo realiza e a localização atual.
                    </p>
                </div>

                <img 
                    alt="imagem-ComoFunciona"
                    className="imagem" 
                    src={require("../../assets/image/ComoFunciona.png")}
                />
            </S.ContainerTexto>
        </S.ContainerComoFunciona>
    );
};