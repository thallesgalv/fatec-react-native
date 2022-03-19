import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import {
  Result,
  ResultContent,
  StyledImage,
  StyledInput,
  StyledPressable,
  StyledTextPressable,
  Tittle,
  Wrapper,
} from './styles'

export default function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState(0)
  const [resultado, setResultado] = useState('')

  useEffect(() => {
    handleMessage()
  }, [imc])

  const handleCalculation = () => {
    if (altura && peso) {
      setImc(+peso / (+altura) ** 2)
    }
  }

  const handleMessage = () => {
    if (imc) {
      let message
      if (imc < 18.5) {
        message = 'Abaixo do peso'
      }
      if (imc >= 18.5 && imc < 24.9) {
        message = 'Peso normal'
      }
      if (imc >= 25 && imc < 29.9) {
        message = 'Sobrepeso'
      }
      if (imc >= 30 && imc < 34.9) {
        message = 'Obesidade grau I'
      }
      if (imc >= 35 && imc < 39.9) {
        message = 'Obesidade grau II'
      }
      if (imc >= 40) {
        message = 'Obesidade grau III ou Mórbida'
      }

      setResultado(message)
    }
  }

  const handleFocus = () => {
    setAltura('')
    setPeso('')
    setImc(0)
    setResultado('')
  }

  const imageURL =
    'https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

  return (
    <Wrapper>
      <Tittle>Cálculo do IMC</Tittle>
      <StyledImage source={{ uri: imageURL }}></StyledImage>

      <StyledInput
        placeholder='Altura em m:'
        onChangeText={text => setAltura(text.replace(',', '.'))}
        onFocus={handleFocus}
        keyboardType='numeric'
        value={altura}
      ></StyledInput>
      <StyledInput
        placeholder='Peso em kg:'
        onChangeText={text => setPeso(text.replace(',', '.'))}
        keyboardType='numeric'
        value={peso}
      ></StyledInput>
      <StyledPressable onPress={handleCalculation}>
        <StyledTextPressable> Verificar</StyledTextPressable>
      </StyledPressable>
      {resultado ? (
        <View>
          <Result>Resultado:</Result>
          <ResultContent>Seu IMC é: {imc.toFixed(1)}</ResultContent>
          <ResultContent>{resultado}</ResultContent>
        </View>
      ) : null}
    </Wrapper>
  )
}
