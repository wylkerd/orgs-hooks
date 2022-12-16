import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import { carregaProdutores } from '../../../services/carregaDados'

export default function Produtores() {

  // Array de dependencia vazio executa apenas uma vez o useEffect, assim que carrega a tela
  useEffect(() => {
    const retorno = carregaProdutores();
  }, []);

  return (
    <View>
      <Text>Produtores</Text>
    </View>
  )
}