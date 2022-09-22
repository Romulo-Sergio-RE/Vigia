import { GridCard } from "../gridCard/GridCard"
import { Titulo } from "../titulo/Titulo"
import * as S from "./styledNossoAplicativo"

export const NossoAplicativo = ()=>{
    return(
        <S.ContainerNossoAplicativo>
            <Titulo color="verde" titulo="Nosso Aplicativo"/>
            <img 
                className="imagemNossoAplicativo" 
                src={require("../../assets/image/imgApp.png")} 
                alt="imagem-nossoAplicativo"
            />
        </S.ContainerNossoAplicativo>
    )
}