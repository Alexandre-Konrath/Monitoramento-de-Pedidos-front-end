import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Navbar from '../../components/Navbar';
import Status from '../../components/Status';
import Pedidos from '../../components/Pedidos';

import './styles.css'

export default function HomePage () {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    api.get('/pedidos')
    .then((resp) => {
      setPedidos(resp.data)
      const pedidosAprovados = resp.data.filter(pedido => pedido.status === 'APROVADO')
      console.log(pedidosAprovados)
    })
    .catch((err) => {
      alert('Erro ao carregar os pedidos')
    })
  }, [])




  return (
    <div className='container-home'>

      <Navbar />

      <Status />

      <div className='pedidos'>
        {
          pedidos.map((ped) => {
            return (
              <Pedidos
                key={ped.id}
                numero={ped.numero}
                pedido={ped.pedido}
                valor={ped.valor}
                status={ped.status}
              />
            )
          })
        }
      </div>
    </div>
  );
};
