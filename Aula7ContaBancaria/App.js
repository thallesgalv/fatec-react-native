import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import FormField from './components/FormField'
import { Title, Wrapper } from './globalStyles'

export default function App() {
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')
  const [genderInput, setGenderInput] = useState(null)

  return (
    <Wrapper>
      <Title>Abertura de Conta</Title>
      <FormField
        labelText='Nome:'
        keyboardType='default'
        inputValue={nameInput}
        setInputValue={setNameInput}
      />
      <FormField
        labelText='Idade:'
        keyboardType='numeric'
        inputValue={ageInput}
        setInputValue={setAgeInput}
      />
        <Picker
          selectedValue={genderInput}
          onValueChange={itemValue => setGenderInput(itemValue)}
        >
          <Picker.Item key={'masculino'} label='Masculino' value='masculino' />
          <Picker.Item key={'feminino'} label='Feminino' value='feminino' />
        </Picker>
    </Wrapper>
  )
}

{
  /* <Picker.Item key={1} label='Sem instrução' value='sem intrução' />
        <Picker.Item
          key={2}
          label='Ensino Fundamental incompleto'
          value='ensino fundamental incompleto'
        />
        <Picker.Item
          key={3}
          label='Ensino Fundamental completo'
          value='ensino fundamental completo'
        />
        <Picker.Item
          key={4}
          label='Ensino Médio incompleto'
          value='ensino médio incompleto'
        />
        <Picker.Item
          key={5}
          label='Ensino Médio completo'
          value='ensino médio completo'
        />
        <Picker.Item
          key={5}
          label='Ensino Superior incompleto'
          value='ensino superior incompleto'
        />
        <Picker.Item
          key={5}
          label='Ensino Superior completo'
          value='ensino superior completo'
        />
      </Picker> */
}

{
  /* <FormFieldWrapper><Label>Sexo:</Label></FormFieldWrapper> */
}
