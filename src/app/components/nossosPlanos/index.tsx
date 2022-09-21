import React from "react";
import { Titulo } from "../titulo/Titulo";
import  * as S from "./styledNossosPlanos";

export const NossosPlanos = () =>{
    return(
        <S.ContainerNossoPlanos>
            <Titulo color="branco" titulo="Nossos Planos"/>
            <S.ContainerCards>
                <div className="card-plano">
                    <h1>Plano - 1</h1>
                    <div className="teste">
                        <div className="info-card">
                            <h2>- Comodato:</h2>
                            <h3>O aparelho e da empresa e o cliente paga uma mensalidade</h3>
                            <h2>- Instalação do Aparelho:</h2>
                            <h3>Valor:<h2 className="valorPlano">R$ 99,99</h2></h3>
                        </div>
                        <div className="info-card">
                            <h3>mensalidade do CHIP e do APLICATIVO</h3>
                            <h3>preço -<h2 className="valorPlano"> R$ 49,99</h2></h3>
                        </div>
                    </div>
                </div>
                <div className="card-plano">
                    <h1>Plano - 2</h1>
                    <div className="teste">
                        <div className="info-card">
                            <h2>- Aparelho + Instalação :</h2>
                            <h3>O cliente compra o aparelho e fica pagando a mensalidade</h3>
                            <h3>Valor:<h2 className="valorPlano">R$ 399,99</h2></h3>
                        </div>
                        <div className="info-card">
                            <h3>mensalidade do CHIP e do APLICATIVO</h3>
                            <h3>preço -<h2 className="valorPlano"> R$ 24,99</h2></h3>
                        </div>
                    </div>
                </div>
            </S.ContainerCards>
        </S.ContainerNossoPlanos>
    );
};