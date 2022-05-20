import { MaterialIcons } from '@expo/vector-icons'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [githubData, setGithubData] = useState({})

  async function handleClick() {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${inputValue}`
      )
      if (data) setGithubData(data)
    } catch (e) {
      console.log('Status', e)
      setGithubData(false)
    }
  }

  const logo =
    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil dos Devs</Text>
      <View style={styles.row}>
        <TextInput
          placeholder='Digite o login do Github'
          value={inputValue}
          onChangeText={value => setInputValue(value)}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleClick}>
          <MaterialIcons name='search' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        <Image
          source={{ uri: githubData.avatar_url || logo }}
          style={{ width: 200, height: 200 }}
        />
        {githubData ? (
          <View>
            {githubData.id && <Text>Id: {githubData.id}</Text>}
            {githubData.name && <Text>Nome: {githubData.name}</Text>}
            {githubData.public_repos && (
              <Text>Repositórios: {githubData.public_repos}</Text>
            )}
            {githubData.created_at && (
              <Text>Criado em: {githubData.created_at}</Text>
            )}
            {githubData.followers && (
              <Text>Seguidores: {githubData.followers}</Text>
            )}
            {githubData.following && (
              <Text>Seguindo: {githubData.following}</Text>
            )}
          </View>
        ) : (
          <Text>Usuário não encontrado.</Text>
        )}
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    borderBottomWidth: 2,
    borderColor: '#000',
    marginTop: 64,
    paddingBottom: 8,
    margin: 32,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 32,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 4,
    borderRadius: 4,
    marginRight: 16,
  },
  result: {
    margin: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
