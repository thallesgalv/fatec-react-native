import { StyleSheet, Text, View } from 'react-native'

export function Experiencia() {
  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Experiencia</Text>
      <Text style={styles.subtitle}>1. Jornalista Estagiário</Text>
      <Text style={styles.subtitle}>2. Assessor de Impresa Pleno</Text>
      <Text style={styles.subtitle}>3. Redator Pleno</Text>
      <Text style={styles.subtitle}>4. Desenvolvedor Front-end Estagiário</Text>
      <Text style={styles.subtitle}>5. Desenvolvedor Front-end Jr.</Text>
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