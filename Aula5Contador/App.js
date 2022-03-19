import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(state => state + 1)
  }

  const handleDecrement = () => {
    if (count > 0) setCount(state => state - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contador de Pessoas</Text>
      <View style={styles.content}>
        <View>
          <Text style={styles.visor}>{count}</Text>
        </View>
        <View style={styles.containerButtons}>
          <Pressable style={styles.button} onPress={handleIncrement}>
            <Text style={styles.textButton}>+</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleDecrement}>
            <Text style={styles.textButton}>-</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 48,
    color: '#fff',
    fontFamily: 'monospace',
    marginBottom: '40%',
    textAlign: 'center',
  },
  visor: {
    fontSize: 128,
    color: '#fff',
    borderRadius: 16,
    padding: 48,
    fontFamily: 'monospace',
  },
  containerButtons: {
    flexDirection: 'row',
    fontSize: 64,
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#fff',
    height: 64,
    width: 64,
    borderRadius: 64,
  },
  textButton: {
    fontSize: 48,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace',
    color: '#171717',
    textAlign: 'center',
  },
})
