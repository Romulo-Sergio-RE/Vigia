import { GridCard } from "../gridCard/GridCard"
import { Titulo } from "../titulo/Titulo"
import * as S from "./styledNossoServico"

export const NossoServico = ()=>{
    return(
        <S.ContainerNossoServico>
            <Titulo color="verde" titulo="Nosso Serviço"/>
            <GridCard />
        </S.ContainerNossoServico>
    )
}