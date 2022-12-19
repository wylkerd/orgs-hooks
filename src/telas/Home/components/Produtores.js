import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'

import ProdutorCard from './ProdutorCard';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({ topo: Topo }) {
  const [ titulo, lista ] = useProdutores();

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
      renderItem={({ item }) => <ProdutorCard { ...item }/>} // Passando todos parâmetro com a descontrução(spread) do obj
      keyExtractor={({ nome }, index) => nome + index}
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