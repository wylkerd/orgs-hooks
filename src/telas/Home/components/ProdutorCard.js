import React from 'react'
import { View, Text, Image } from 'react-native'

export default function ProdutorCard({ nome, imagem, distancia, estrelas }) {
  return (
    <View>
      <Image source={imagem} accessibilityLabel={nome} />
      <View>
        <Text>{ nome }</Text>
        <Text>{ distancia }</Text>
      </View>
    </View>
  )
}