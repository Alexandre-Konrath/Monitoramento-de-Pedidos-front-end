import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './style.css'

export default function TotalVendas() {
  const [totalVendas, setTotalVendas] = useState(null);

  useEffect(() => {
    const fetchResumoStatus = async () => {
      try {
        const response = await api.get('/pedidos/totalVendas');
        setTotalVendas(response.data);
      } catch (error) {
        console.error('Erro ao buscar resumo de status:', error);
      }
    };

    fetchResumoStatus();
  }, []);


  return (
    <div className='total-vendas'>
      {totalVendas && (
        <div className='total-vendas-container box-shadow'>
          <h1>Total de vendas</h1>
          <span>R$ {totalVendas.totalVendas !== undefined ? totalVendas.totalVendas.toFixed(2) : '' }</span>
        </div>
      )}
    </div>
  )
}
