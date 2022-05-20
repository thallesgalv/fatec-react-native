import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [result, setResult] = useState('');

  async function handleClick() {
    try {
      const { data } = await axios.get(
        `https://economia.awesomeapi.com.br/json/last/${from}-${to}`
      )
      switch (from) {
        case 'BRL':
          switch (to) {
            case 'USD':
              setResult((data.BRLUSD.bid * +inputValue).toFixed(2));
              break;
            case 'EUR':
              setResult((data.BRLEUR.bid * +inputValue).toFixed(2));
              break;
          }
          break;
        case 'USD':
          switch (to) {
            case 'BRL':
              setResult((data.USDBRL.bid * +inputValue).toFixed(2));
              break;
            case 'EUR':
              setResult((data.USDEUR.bid * +inputValue).toFixed(2));
              break;
          }
          break;
        case 'EUR':
          switch (to) {
            case 'USD':
              setResult((data.EURUSD.bid * +inputValue).toFixed(2));
              break;
            case 'BRL':
              setResult((data.EURBRL.bid * +inputValue).toFixed(2));
              break;
          }
          break;
        case 'BTC':
          switch (to) {
            case 'USD':
              setResult((data.BTCUSD.bid * +inputValue).toFixed(2));
              break;
            case 'EUR':
              setResult((data.BTCEUR.bid * +inputValue).toFixed(2));
              break;
            case 'BRL':
              setResult((data.BTCBRL.bid * +inputValue * 1000).toFixed(2));
              break;
          }
          break;
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View style={styles.row}>
        <Text>Valor:</Text>
        <TextInput
          keyboardType='numeric'
          value={inputValue}
          onChangeText={value => setInputValue(value)}
          style={styles.input}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Text>De:</Text>
        <Picker
          style={styles.picker}
          selectedValue={from}
          onValueChange={itemValue => setFrom(itemValue)}
        >
          <Picker.Item label='Selecione a moeda' value='' />
          <Picker.Item key={1} value={'BRL'} label='Real' />
          <Picker.Item key={2} value={'USD'} label='Dólar' />
          <Picker.Item key={3} value={'EUR'} label='Euro' />
          <Picker.Item key={4} value={'BTC'} label='Bitcoin' />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text>Para:</Text>
        <Picker
          style={styles.picker}
          selectedValue={to}
          onValueChange={itemValue => setTo(itemValue)}
        >
          <Picker.Item label='Selecione a moeda' value='' />
          <Picker.Item key={1} value={'BRL'} label='Real' />
          <Picker.Item key={2} value={'USD'} label='Dólar' />
          <Picker.Item key={3} value={'EUR'} label='Euro' />
          <Picker.Item key={4} value={'BTC'} label='Bitcoin' />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>
      {result && <Text style={styles.result}>{result.toString()}</Text>}
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
    marginLeft: 16,
  },
  result: {
    margin: 32,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold'
  },
  pickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  picker: {
    width: '80%',
  },
  button: {
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
    marginHorizontal: 120,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
})
