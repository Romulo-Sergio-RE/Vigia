import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import { LandPage } from "../page";
import { ComoFuncionaPage } from "../page/comoFuncionaPage";
import { FaleConoscoPage } from "../page/faleConoscoPage";
import { PlanoPage } from "../page/planoPage/LandPage";
import { QuemSomosPage } from "../page/quemSomosPage";
import { ServicoPage } from "../page/servicoPage";

export const Routes = ({children}:any)=>{
    return(
        <BrowserRouter>
            {children}
            <Switch>
                <Route path="/"  element={<LandPage />}/>
                <Route path="/servico"  element={<ServicoPage />}/>
                <Route path="/quemSomos"  element={<QuemSomosPage />}/>
                <Route path="/comoFunciona"  element={<ComoFuncionaPage />}/>
                <Route path="/planos"  element={<PlanoPage />}/>
                <Route path="/faleConosco"  element={<FaleConoscoPage />}/>
            </Switch>
        </BrowserRouter>
    );
} 