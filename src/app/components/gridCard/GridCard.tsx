import { Card } from "../card/Card";
import { ContainerGridCard } from "./styleGrid";

export const GridCard = () =>{

    const dadosDoServico = [
        {
            id: '1',
            titulo: 'Controle',
            texto: 'Você poderá verificar e bloquear seu veículo pelo aplicativo exclusivo, por meio do celular, tablet ou computador.',
        },
        {
            id: '2',
            titulo: 'Relatórios',
            texto: 'Consegue ter informações sobre o que acontece com o veículo como rotas, paradas e velocidades.',
        },
        {
            id: '3',
            titulo: 'Gestão de Frotas',
            texto: 'Com sistema é possível ter o gerenciamento de frotas de veículos através do controle de dados, o consumo de combustível, quilometragem e rotas percorridas.',
        },
        {
            id: '4',
            titulo: 'Rastreio e Bloqueio',
            texto: 'O sistema permite um rastreamento inteligente, bloqueio e gerenciamento de frota',
        },
        {
            id: '5',
            titulo: 'Atendimento 24h',
            texto: 'Central própria e dedicada para atendimento a qualquer hora do dia.',
        },
        {
            id: '6',
            titulo: 'Notificações',
            texto: 'Receberá uma notificação caso seu veículo seja ligado.',
        },
        {
            id: '7',
            titulo: 'Âncora',
            texto: 'Receberá uma notificação se o seu carro sai do local demarcado por você, em caso de reboque ou  furto.',
        },
        {
            id: '8',
            titulo: 'Cerca Virtual',
            texto: 'Receberá uma notificação se o seu carro trafegar fora da área delimitada por você',
        },
    ]
    return(
        <ContainerGridCard>
            {
                dadosDoServico.map((servicos, id) =>
                    <Card 
                        key={id}
                        tituloCard={servicos.titulo} 
                        textoCard={servicos.texto}
                    />
                )
            }
        </ContainerGridCard>
    );
}
