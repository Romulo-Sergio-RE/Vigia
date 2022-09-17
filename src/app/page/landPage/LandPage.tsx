import { ContainerHome } from "./styled";
import * as C from "../../components";

export const LandPage = () =>{
    return (
        <ContainerHome>
          <C.Header />
          <C.Inicio />
          <C.NossoServico />
          <C.NossoAplicativo />
          <C.ComoFunciona />
          <C.QuemSomos />
          <C.NossosPlanos />
          <C.FaleConosco />
          <C.Footer />
        </ContainerHome>
    );
} 