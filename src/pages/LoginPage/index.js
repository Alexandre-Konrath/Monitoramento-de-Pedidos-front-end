import { Link } from 'react-router-dom'
import sidebar from '../../assets/sidebar-img.png'
import './styles.css'

export default function LoginPage() {
  return (
    <div className='container'>
      <div className='imagem'>
        <img className='sidebar-img' src={sidebar}/>
      </div>
      <div className='login'>
        <div className='container-login'>
          <div className='descricao'>
            <p>Acesse o Painel de Monitoramento</p>
          </div>
          <div className='inputs'>
            <div className='grupo'>
              <label>Email:</label>
              <input type='email'/>
            </div>
            <div className='grupo'>
              <label>Senha:</label>
              <div>
                <input type='password'/>
                <button className='input-btn'>Show</button>
              </div>
            </div>
          </div>
          <div className='button'>
            <Link to={'/home'}>Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
