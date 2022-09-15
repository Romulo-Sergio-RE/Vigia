import { FormEvent, useState } from 'react';
import { Titulo } from '../titulo/Titulo';
import * as S from './styledModalFormulario';
import { AiOutlineClose } from 'react-icons/ai';
interface formularioProps {
    onClose: (value: React.SetStateAction<boolean>) => void
}
export const Formulario:React.FC<formularioProps> = (props) =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const fecharModal = ()=>{
        props.onClose(false)
    }
    const submitEmail = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(message)
        e.target.addEventListener("click", fecharModal)
        fecharModal()
    }
    return(
        <S.ContainerModal>
            <S.ContainerForm onSubmit={(e)=>submitEmail(e)}>
                <div className='titulos'>
                    <Titulo color='branco' titulo='Entrar em Contato'/>
                    <AiOutlineClose 
                        onClick={fecharModal}
                        className='iconeBotao' 
                        size={24} 
                        color={"#f2f2f2"}
                    >voltar</AiOutlineClose>
                </div>
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
                    className='botao-formulario' 
                >Enviar</button>
            </S.ContainerForm>
        </S.ContainerModal>
    );
};