import { StyleSheet, Text, View } from 'react-native'

export function Formacao() {
  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Formacao</Text>
      <Text style={styles.subtitle}>Primeira formação: Jornalismo</Text>
      <Text style={styles.subtitle}>Segunda formação: Sistemas para internet</Text>
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