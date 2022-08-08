import { ContainerHome } from "./styled";
import * as C from "../../components";

export const LandPage = () =>{
    return (
        <ContainerHome>
          <C.Header />

          <C.InfoVigia key={"l"}
            titulo={"Vigia - Rastreamento Veicular"} 
            tituloBTN={"Saiba Mais"} 
            texto={"Criado a para os usuário que querem ter segunraça de onde estão seus veículos, podendo localizar, monitorar e gerenciá-los."}
            fundo={""}
            imagem={require("../../assets/primeiraImagem.png")}
          />

          <C.Titulo titulo="Nossos Serviços" color="verde"/>
          <C.GridCard />

          <C.InfoVigia 
            titulo={"Quem somos"} 
            tituloBTN={"Fale Conosco"} 
            texto={"Vigia é uma empresa especializada em localizar, monitorar e ter a gestão de frotas, com o foco em ajudar nos desafios da gestao de recursos através da tecnologia. Com ele conseguimos conectar seus veículos e apresentar novas perspectivas sobre o seu negócio."}
            fundo={""}
            imagem={require("../../assets/QuemSomos.png")}
          />
          <C.InfoVigia 
            titulo={"Como Funciona nosso Sistema"} 
            tituloBTN={""} 
            texto={"Nossa tecnologia funciona através de um dispositivo que é instalado em um local estratégico do seu veículo ou do veículo da sua empresa.Você poderá então acessar as informações através do nosso aplicativo ou plataforma na web, e através disso, controlar os percursos que o seu veículo realiza e a localização atual. "}
            fundo={"verde"}
            imagem={require("../../assets/Como funciona.png")}
          />
          
          <C.FaleConosco />
          <C.Footer />
        </ContainerHome>
    );
} 