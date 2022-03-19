import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Link } from './components/Link'
import { Paragraph } from './components/Paragraph'

export default function App() {
  const nome = 'Thalles'
  const imgURL = 'https://avatars.githubusercontent.com/u/65674000?v=4'
  const formacao = 'Cursando Sistemas para Internet'
  const experiencia = 'Experiência de três anos como dev front-end'
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: imgURL }} style={{ width: 100, height: 100 }} />
      <Paragraph>Nome: {nome}</Paragraph>
      <Paragraph>Formação: {formacao}</Paragraph>
      <Paragraph>Experiência: {experiencia}</Paragraph>
      <Paragraph>
        Projetos: Veja meus projetos em{' '}
        <Link url='https://www.thallesgalvao.com.br'>meu site</Link> ou meu{' '}
        <Link url='https://github.com/thallesgalv'>github</Link>
      </Paragraph>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
