
import UserImage from '../../src/assets/users.png'
import { Background } from '../TopBackground/styles'

function TopBackground() {

    return (
        <Background>
            <img src= {UserImage} alt='imagem de usuários' />
        </Background>
  
    )
    
}

export default TopBackground