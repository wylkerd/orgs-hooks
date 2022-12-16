import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { carregaTopo } from '../../../services/carregaDados'
import logo from '../../../assets/logo.png'

class Topo extends Component {

  atualizaTopo() {
    const retorno = carregaTopo();
    console.log(retorno)
  }

  // Exemplo de ciclo de vida utilizando Classe
  // Quando o componente é criado na tela
  /* É o mesmo que isso em um functional component
    useEffect(() => {

    }, []);
  */
  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem}/>
        <Text style={estilos.boasVindas}>Olá Wylkerd</Text>
        <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
      </View>
    )
  }

}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26
  }
})

export default Topo;