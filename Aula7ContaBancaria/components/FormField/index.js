import { FormFieldWrapper, Label, StyledInput } from './styles'

const FormField = ({ labelText, keyboardType, inputValue, setInputValue }) => {
  return (
    <FormFieldWrapper>
      <Label>{labelText}</Label>
      <StyledInput
        onChangeText={val => setInputValue(val)}
        keyboardType={keyboardType}
        value={inputValue}
      />
    </FormFieldWrapper>
  )
}

export default FormField
