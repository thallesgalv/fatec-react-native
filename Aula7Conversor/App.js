import { Picker } from '@react-native-picker/picker'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  const [inputValue, setInputValue] = React.useState('')
  const [fromValue, setFromValue] = React.useState('')
  const [toValue, setToValue] = React.useState('')
  const [showResult, setShowResult] = React.useState(false)

  const REAL_TO_DOLAR = 0.22
  const DOLAR_TO_REAL = 4.6

  const REAL_TO_EURO = 0.2
  const EURO_TO_REAL = 5.04

  const DOLAR_TO_EURO = 0.91
  const EURO_TO_DOLAR = 1.1

  const formatMoney = (index, currency) => {
    const value = inputValue * index
    if (currency === 'real') {
      return `R$ ${value.toFixed(2).replace('.', ',')}`
    }
    if (currency === 'dolar') {
      return `US$ ${value.toFixed(2).replace('.', ',')}`
    }
    if (currency === 'euro') {
      return `€ ${value.toFixed(2).replace('.', ',')}`
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas Dólar, Real e Euro</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor:</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={text => setInputValue(text)}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>De:</Text>
        <Picker
          style={styles.picker}
          selectedValue={fromValue}
          onValueChange={itemValue => setFromValue(itemValue)}
        >
          <Picker.Item label='Selecione a moeda' value='' />
          {toValue !== 'real' && <Picker.Item label='Real' value='real' />}
          {toValue !== 'dolar' && <Picker.Item label='Dólar' value='dolar' />}
          {toValue !== 'euro' && <Picker.Item label='Euro' value='euro' />}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Para:</Text>
        <Picker
          style={styles.picker}
          selectedValue={toValue}
          onValueChange={itemValue => setToValue(itemValue)}
        >
          <Picker.Item label='Selecione a moeda' value='' />
          {fromValue !== 'real' && <Picker.Item label='Real' value='real' />}
          {fromValue !== 'dolar' && <Picker.Item label='Dólar' value='dolar' />}
          {fromValue !== 'euro' && <Picker.Item label='Euro' value='euro' />}
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setShowResult(true)}>
          <Text style={styles.buttonText}>Converter</Text>
        </Pressable>
      </View>
      {showResult && (
        <View style={styles.result}>
          <Text style={styles.subtitle}>Resultado:</Text>
          {fromValue === 'real' && toValue === 'dolar' && (
            <Text style={styles.resultText}>{formatMoney(REAL_TO_DOLAR, 'dolar')}</Text>
          )}
          {fromValue === 'dolar' && toValue === 'real' && (
            <Text style={styles.resultText}>{formatMoney(DOLAR_TO_REAL, 'real')}</Text>
          )}
          {fromValue === 'real' && toValue === 'euro' && (
            <Text style={styles.resultText}>{formatMoney(REAL_TO_EURO, 'euro')}</Text>
          )}
          {fromValue === 'euro' && toValue === 'real' && (
            <Text style={styles.resultText}>{formatMoney(EURO_TO_REAL, 'real')}</Text>
          )}
          {fromValue === 'dolar' && toValue === 'euro' && (
            <Text style={styles.resultText}>{formatMoney(DOLAR_TO_EURO, 'euro')}</Text>
          )}
          {fromValue === 'euro' && toValue === 'dolar' && (
            <Text style={styles.resultText}>{formatMoney(EURO_TO_DOLAR, 'dolar')}</Text>
          )}
        </View>
      )}
      <StatusBar style='auto' />
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
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  label: {
    marginRight: 8,
  },
  input: {
    borderWidth: 1,
    padding: 2,
    width: '60%',
    borderRadius: 4,
    paddingLeft: 2,
  },
  pickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  picker: {
    width: '60%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  result: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
  }
})
