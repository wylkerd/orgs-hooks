import { useState, useEffect } from 'react';

import { carregaProdutores } from '../services/carregaDados'

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

    // Array de dependencia vazio executa apenas uma vez o useEffect, assim que carrega a tela
    useEffect(() => {
      const retorno = carregaProdutores();
      setTitulo(retorno.titulo);
      setLista(retorno.lista);
    }, []);

  return [titulo, lista]
}