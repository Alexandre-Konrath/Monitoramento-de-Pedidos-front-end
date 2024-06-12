import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='text'>
        <h1>MONITORAMENTO DE PEDIDOS</h1>
      </div>
      <div className='btn-sair'>
        <Link to={'/'}>SAIR</Link>
      </div>
    </div>
  )
}
