import { useState } from 'react'
import {
  Result,
  StyledInput,
  StyledPressable,
  StyledTextPressable,
  Tittle,
  Wrapper,
} from './styes'

export default function App() {
  const [firstInputValue, setFirstInputValue] = useState('')
  const [secondInputValue, setSecondInputValue] = useState('')
  const [sum, setSum] = useState('')

  const handleSum = () => {
    const total = +firstInputValue * +secondInputValue
    if (typeof total === 'number') {
      setSum(total)
      setFirstInputValue('')
      setSecondInputValue('')
    }
  }

  return (
    <Wrapper>
      <Tittle>Multiplicador de números</Tittle>
      <StyledInput
        placeholder='Digite o seu primeiro número:'
        onChangeText={text => setFirstInputValue(text)}
        keyboardType='numeric'
        value={firstInputValue}
      ></StyledInput>
      <StyledInput
        placeholder='Digite o seu segundo número:'
        onChangeText={text => setSecondInputValue(text)}
        keyboardType='numeric'
        value={secondInputValue}
      ></StyledInput>
      <StyledPressable onPress={handleSum}>
        <StyledTextPressable> Multiplicar</StyledTextPressable>
      </StyledPressable>
      <Result>Resultado: {sum}</Result>
    </Wrapper>
  )
}

{
  /* <Result>Resultado: {sum ? <Result>sum</Result> : null}</Result> */
}
