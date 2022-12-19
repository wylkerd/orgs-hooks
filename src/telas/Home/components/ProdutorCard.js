import React, { useReducer, useMemo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Estrelas from '../../../components/Estrelas';

const distanciaEmMetros = (distancia) => {
  // console.log('distanciaEmMetros')
  return `${distancia}m`
}

export default function ProdutorCard({ nome, imagem, distancia, estrelas }) {
  const [ selecionado, dispatchInverterSelecionado ] = useReducer(
    (selecionado) => !selecionado, 
    false
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia), 
    [distancia] // Aciona a chamada do método distanciaEmMetros, sempre que alterar a distancia
  );

  return (
    <TouchableOpacity 
      style={ estilos.cartao }
      onPress={dispatchInverterSelecionado}
    >
      <Image source={ imagem } accessibilityLabel={ nome } style={ estilos.imagem } />
      <View style={ estilos.informacoes }>
        <View>
          <Text style={ estilos.nome }>{ nome }</Text>
          <Estrelas 
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={ estilos.distancia }>{ distanciaTexto }</Text>
      </View>
    </TouchableOpacity>
  )
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    
    // Android
    elevation: 4,

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16
  },
  informacoes: {
    flex: 1, // faz com que o elemento cresça até o seu maior limite
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19
  }
})