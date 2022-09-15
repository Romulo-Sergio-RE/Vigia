import { Titulo } from "../titulo/Titulo"
import * as S from "./styledQuemSomos"

export const QuemSomos = ()=>{
    return(
        <S.ContainerQuemSomos>
            <Titulo color="verde" titulo="Quem Somos"/>
            <S.ContainerInfo>
                <p className="texto"> 
                    VIGIA uma  empresa especializada em localizar, 
                    monitorar e ter a gestão de frotas, com o foco 
                    em ajudar nos desafios da gestão de recursos através 
                    da tecnologia. Com ele conseguimos conectar seus veículos 
                    e apresentar novas perspectivas sobre o seu negócio.
                </p>
                <div className="imagem"></div>
            </S.ContainerInfo>
        </S.ContainerQuemSomos>
    )
}