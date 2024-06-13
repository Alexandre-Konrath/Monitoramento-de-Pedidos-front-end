import './style.css'

export default function Pedidos(props) {
    // Função para determinar a classe com base no status
    const getStatusClass = () => {
      if (props.status === 'CANCELADO') {
        return 'cancelado';
      }
      if (props.status === 'PROCESSANDO') {
        return 'processando';
      }
      if (props.status === 'PENDENTE') {
        return 'pendente';
      }
      if (props.status === 'APROVADO') {
        return 'aprovado';
      }
    };

    // valores que sao maiores que 200.00 reais coloca uma cor diferente
    const getLimitedNumber = () => {
      if (props.valor >= 200.00) {
        return 'limited'
      }
    }


  return (
    <div className='pedido-container box-shadow'>
      <div className='title-btn'>
        <h1 className='title'>Pedido</h1>
        <button className='border-btn-blue'>ACESSAR</button>
      </div>
        <div className='valores' key={props.id}>
          <div className='valores-container border-bottom-blue'>
            <p>Numero</p>
            <div className='valores-manipulados'>
              <span>{props.numero}</span>
            </div>
          </div>
          <div className='valores-container border-bottom-blue'>
            <p>Valor</p>
            <div className='valores-manipulados'>
                <span className={`${getLimitedNumber()}`}>R$ {props.valor !== undefined ? props.valor.toFixed(2) : ''}</span>
              </div>
          </div>
          <div className='valores-container border-bottom-blue'>
            <p>Status</p>
            <div className='valores-manipulados'>
              <span className={`${getStatusClass()}`}>{props.status}</span>
            </div>
          </div>
        </div>
    </div>
  )
}
