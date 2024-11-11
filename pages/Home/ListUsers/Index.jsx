

import { useEffect, useState } from 'react'

import api from '../../../services/api'

import Button from '../../../components/Button'
import TopBackground from '../../../components/TopBackground'
import Trash from '../../../src/assets/trash.svg'
import { useNavigate } from 'react-router-dom'

import {
    Container,
    ContainerUsers,
    CardUsers,
    TrashIcon,
    Title,
    AvatarUser
} from './style'

function ListUsers() {
    const homeNavigate = useNavigate()
    const [users, setUsers] = useState([])

    // Função para buscar usuários ao carregar o componente
    useEffect(() => {
        async function getUsers() {
            try {
                const { data } = await api.get('/users')  // Faz a requisição GET na API
                setUsers(data)  // Define os dados no estado 'users'
            } catch (error) {
                console.error('Erro ao buscar dados dos usuários:', error)
            }
        }
        getUsers()
    }, [])

    // Função para deletar usuários
    async function deleteUsers(id) {
        console.log("ID do usuário para deletar:", id);  // Confirmar o ID
        try {
            await api.delete(`/users/${id}`);  // Faz a requisição DELETE na API
            const updatedUsers = users.filter(user => user._id !== id);  // Atualiza a lista filtrando o usuário deletado
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
        }
    }

    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user._id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user._id}`} />
                        <div>
                            <h3>{user.nome}</h3>
                            <p>{user.idade}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUsers(user._id)} />
                    </CardUsers>
                ))}

            </ContainerUsers>

            <Button type="button" onClick={() => homeNavigate('/')} > Voltar </Button>
        </Container>
    )
}

export default ListUsers
