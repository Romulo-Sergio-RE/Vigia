import { Link } from "react-router-dom"
import * as S from "./styledInicio"

export const Inicio = ()=>{
    return(
        <S.ContainerInicio>
            <S.ContainerInfo>
                <img 
                    className="logoVigia" 
                    src={require("../../assets/image/logoCompleta.png")} 
                    alt="logoVigiaCompleo"
                />
                <h4 className="subTitulo">Rastreamento Veicular</h4>
                <p className="texto">Criada para os usuários que querem ter segurança de onde estão seus veículos, podendo localizar, monitorar e gerenciá-los. </p>
                <button 
                    className="botaoSaibaMais" 
                ><Link to="/quemSomos" className="link" >Saiba Mais</Link></button>
            </S.ContainerInfo>

            <img 
                alt="imagem-inicio"
                className="imagem"
                src={require("../../assets/image/inicio.png")}
            />
        </S.ContainerInicio>
    )
}