import styled from 'styled-components/native'

export const FormFieldWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
`

export const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  margin-right: 16px;
  font-weight: bold;
`

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: '#aaa',
})`
  width: 200px;
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 4px;
  color: #fff;
`