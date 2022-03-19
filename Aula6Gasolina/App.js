import React, { useState } from 'react'
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
  const [gasolinaInput, setGasolinaInput] = useState('')
  const [alcoolInput, setAlcoolInput] = useState('')
  const [resultado, setResultado] = useState('')

  const handleCalculation = () => {
    if (alcoolInput && gasolinaInput) {
      if (alcoolInput / gasolinaInput <= 0.7) {
        setResultado('Álcool é mais vantajoso')
      } else {
        setResultado('Gasolina é mais vantajoso')
      }
    } else {
      setResultado('Por favor, digite os valores')
    }
  }

  const handleFocus = () => {
    setGasolinaInput('')
    setAlcoolInput('')
  }

  const imageURL =
    'https://images.unsplash.com/photo-1579445668832-329a98bdff57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

  return (
    <Wrapper>
      <Tittle>Álcool ou Gasolina</Tittle>
      <StyledImage source={{ uri: imageURL }}></StyledImage>

      <StyledInput
        placeholder='Preço da gasolina:'
        onChangeText={text => setGasolinaInput(text)}
        onFocus={handleFocus}
        keyboardType='numeric'
        value={gasolinaInput}
      ></StyledInput>
      <StyledInput
        placeholder='Preço do álcool:'
        onChangeText={text => setAlcoolInput(text)}
        keyboardType='numeric'
        value={alcoolInput}
      ></StyledInput>
      <StyledPressable onPress={handleCalculation}>
        <StyledTextPressable> Verificar</StyledTextPressable>
      </StyledPressable>
      {resultado ? (
        <View>
          <Result>Resultado:</Result>
          <ResultContent>{resultado}</ResultContent>
        </View>
      ) : null}
    </Wrapper>
  )
}
