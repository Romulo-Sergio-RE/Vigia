import { ContainerHome } from "./styled";
import * as C from "../../components";

export const LandPage = () =>{
    return (
        <ContainerHome>
          <C.NavBar />
          <C.Inicio />
          <C.NossoServico />
          <C.NossoAplicativo />
          <C.ComoFunciona 
            colorTitle="branco" 
            color="#f2f2f2" 
            backColor="#345830"
            imagem=""
          />
          <C.QuemSomos />
          <C.NossosPlanos />
          <C.FaleConosco />
          <C.Footer />
        </ContainerHome>
    );
} 