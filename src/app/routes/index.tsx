import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import { LandPage } from "../page";

export const Routes = ({children}:any)=>{
    return(
        <BrowserRouter>
            {children}
            <Switch>
                <Route path="/"  element={<LandPage />}/>
                <Route path="/sobre"  element={<LandPage />}/>
            </Switch>
        </BrowserRouter>
    );
} 