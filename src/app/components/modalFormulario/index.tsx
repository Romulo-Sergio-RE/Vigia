import { FormEvent, useState } from 'react';
import { Titulo } from '../titulo/Titulo';
import * as S from './styledModalFormulario';

interface formularioProps {
    onClose?: ()=>void
}
export const Formulario:React.FC<formularioProps> = (props) =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitEmail = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(message)
    }

    return(
        <S.ContainerModal onClick={props.onClose}>
            <S.ContainerForm onSubmit={(e)=>submitEmail(e)}>
                <Titulo color='branco' titulo='Entrar em Contato'/>

                <div className='container-inputs'>
                    <label>Nome:</label>
                    <input 
                        type="text"
                        placeholder='Digite seu Nome'
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    <label>Email:</label>
                    <input 
                        type="text"
                        placeholder='Digite seu Email'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <label>Sua Mensagem:</label>
                    <textarea 
                        placeholder='Digite sua Mensagem'
                        rows={4} 
                        cols={50}
                        value={message}
                        onChange={(e)=>{setMessage(e.target.value)}}
                    />
                </div>
                
                <button 
                    type='submit'
                    className='botao-formulario' 
                    onClick={props.onClose}
                >Enviar</button>
            </S.ContainerForm>
        </S.ContainerModal>
    );
};