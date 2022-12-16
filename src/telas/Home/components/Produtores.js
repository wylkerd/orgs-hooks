import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import { carregaProdutores } from '../../../services/carregaDados'

export default function Produtores({ topo: Topo }) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);


  // Array de dependencia vazio executa apenas uma vez o useEffect, assim que carrega a tela
  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={ estilos.titulo }>{ titulo }</Text>
      </>
    )
  }

  return (
    <FlatList
      data={lista}
      keyExtractor={({ nome }, index) => nome + index}
      renderItem={({ item: { nome } }) => <Text>{ nome }</Text>}
      ListHeaderComponent={TopoLista}
    />
  )
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTopn: 16,
    fontWeight: 'bold',
    color: '#464646'
  }
})