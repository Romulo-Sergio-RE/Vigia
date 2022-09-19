import React from "react";
import { Titulo } from "../titulo/Titulo";
import  * as S from "./StyledComoFunciona";
interface comoFuncionaProps {
    color: string,
    backColor: string,
    colorTitle: string,
    imagem: string,
}
export const ComoFunciona:React.FC<comoFuncionaProps> = (props) =>{
    return(
        <S.ContainerComoFunciona backColor={props.backColor}>
            <Titulo color={props.colorTitle} titulo="Como Funciona"/>
            <S.ContainerTexto color={props.color}>
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
                {props.imagem === "verde"?
                    <img 
                        alt="imagem-ComoFunciona"
                        className="imagem" 
                        src={require("../../assets/image/comoFuncionaVerde.png")}
                    />
                    :
                    <img 
                        alt="imagem-ComoFunciona"
                        className="imagem" 
                        src={require("../../assets/image/ComoFunciona.png")}
                    />
                }
            </S.ContainerTexto>
        </S.ContainerComoFunciona>
    );
};