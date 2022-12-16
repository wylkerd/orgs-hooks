import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function ProdutorCard({ nome, imagem, distancia, estrelas }) {
  return (
    <View style={ estilos.cartao }>
      <Image source={ imagem } accessibilityLabel={ nome } style={ estilos.imagem } />
      <View style={ estilos.informacoes }>
        <Text style={ estilos.nome }>{ nome }</Text>
        <Text style={ estilos.distancia }>{ distancia }</Text>
      </View>
    </View>
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