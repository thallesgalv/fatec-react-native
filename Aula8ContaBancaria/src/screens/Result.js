import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export function Result({ route }) {
  const navigation = useNavigation();
  return (
    <View style={styles.result}>
    <Text style={styles.subtitle}>Dados Informados:</Text>
    <Text>Nome: {route.params?.nameInput || 'Nome não informado'}</Text>
    <Text>Idade: {route.params?.ageInput || 'Idade não informada'}</Text>
    <Text>Gênero: {route.params?.genderInput}</Text>
    <Text>Escolaridade: {route.params?.schoolingLevelInput}</Text>
    <Text>Limite: {route.params?.limitInput}</Text>
    <Text>Brasileiro: {route.params?.isBrazilianInput ? 'Sim' : 'Não'}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 22,
    textAlign: 'center',
  },
  result: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
})