import { StyleSheet, Text, View } from 'react-native'

export function Pessoal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pessoal</Text>
      <Text style={styles.subtitle}>Nome: Thalles Galvão</Text>
      <Text style={styles.subtitle}>Idade: 28</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 16,
  },
})