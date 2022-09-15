import { useState } from 'react';
import { Titulo } from '../titulo/Titulo';
import * as S from './styled';

export const Formulario = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const EnviarEmailParaVigia = ()=>{
        console.log(name)
        console.log(email)
        console.log(message)
    }

    return(
        <S.ContainerForm>
            <Titulo titulo='Mande Sua Mensagem' color={'verde'}/>

            <label>
                Nome:
                <S.InputForm 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                /> 
            </label> 

            <label>
                Email:
                <S.InputForm 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                /> 
            </label>

            <label>
                Mensagem:
                <S.TextareaForm 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                /> 
            </label> 

        </S.ContainerForm>
    );
};