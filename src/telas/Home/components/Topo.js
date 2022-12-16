import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { carregaTopo } from '../../../services/carregaDados'
import logo from '../../../assets/logo.png'

class Topo extends Component {
  state = {
    topo: {
      boasVindas: "",
      legenda: ""
    }
  }

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno });
  }

  // Exemplo de ciclo de vida utilizando Classe
  // Quando o componente é criado na tela. É o mesmo que isso em um functional component:
  /*
    useEffect(() => {
      atualizaTopo();
    }, []);
  */

  componentDidMount() {
    this.atualizaTopo();
  }
  //////////////////
  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem}/>
        <Text style={estilos.boasVindas}>{ this.state.topo.boasVindas }</Text>
        <Text style={estilos.legenda}>{ this.state.topo.legenda }</Text>
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