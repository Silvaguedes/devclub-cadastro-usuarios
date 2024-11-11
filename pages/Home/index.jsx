import { useRef } from 'react'
import api from '../../services/api.js'
import { useNavigate } from 'react-router-dom'

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  InputLabel,
  Input
} from '../Home/styles.js'

import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef() // Novo campo de senha

  const navigate = useNavigate()

  async function registerNewUser() {
    // Enviando os dados do novo usuário, incluindo a senha
    await api.post('/users', {
      nome: inputName.current.value,
      idade: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
      senha: inputPassword.current.value  // Incluindo a senha
    })
    navigate('lista-de-usuários')
  }

  return (
    <Container>
      <TopBackground/>

      <Form>
        <Title>Cadastro de Usuário</Title>

        <ContainerInputs>

          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }} >
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        {/* Novo campo de senha */}
        <div style={{ width: '100%' }}>
          <InputLabel>
            Senha<span> *</span>
          </InputLabel>
          <Input type="password" placeholder="Senha do usuário" ref={inputPassword} />
        </div>

        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</Button>

      </Form>

      <Button type='button' onClick={() => navigate('lista-de-usuários')}> Ver lista de Usuários </Button>

    </Container>
  )
}

export default Home
