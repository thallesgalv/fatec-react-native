import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import {
  Result,
  ResultFail,
  ResultSucess,
  StyledImage,
  StyledInput,
  StyledPressable,
  StyledText,
  StyledTextPressable,
  Tittle,
  Wrapper,
  Disclaimer
} from './styles'

export default function App() {
  const [numberGenerated, setNumberGenerated] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [show, setShow] = useState(false)

  const generateNumber = useCallback(() => {
    const random = Math.floor(Math.random() * 10)
    if (typeof random === 'number') {
      setNumberGenerated(random)
    }
    setShow(true)
  }, [])

  const handleChange = useCallback(text => {
    setInputValue(text)
    setShow(false)
  }, [])

  const handleFocus = () => {
    setShow(false)
    setInputValue('')
  }

  const imageURL =
    'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'

  return (
    <Wrapper>
      <Tittle>Jogo do número aleatório</Tittle>
      <StyledImage source={{ uri: imageURL }}></StyledImage>
      <StyledText>Pense em número entre 0 e 10</StyledText>
      <StyledInput
        placeholder='Dê seu palpite...'
        onChangeText={text => handleChange(text)}
        onFocus={handleFocus}
        keyboardType='numeric'
        value={inputValue}
      ></StyledInput>
      <StyledPressable onPress={generateNumber}>
        <StyledTextPressable> Descobrir</StyledTextPressable>
      </StyledPressable>

      {inputValue && show ? (
        <View>
          <Result>O número gerado foi: {numberGenerated}</Result>
          <Result>
            {numberGenerated == inputValue ? (
              <ResultSucess>Você acertou</ResultSucess>
            ) : (
              <ResultFail>Você errou</ResultFail>
            )}
          </Result>
        </View>
      ) : null}

      {+inputValue >= 11 ? (
        <Disclaimer>Seu palpite deve ser entre 0 e 10</Disclaimer>
      ) : null}
    </Wrapper>
  )
}
