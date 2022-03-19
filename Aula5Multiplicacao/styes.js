import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #171717;
`
export const Tittle = styled.Text`
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 32px;
  color: #fff;
`

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: '#aaa',
})`
  margin-top: 16px;
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 16px;
  color: #fff;
`

export const StyledPressable = styled.Pressable`
  background: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  margin: 16px 0;
`
export const StyledTextPressable = styled.Text`
  color: #171717;
  font-size: 16px;
  line-height: 24px;
`

export const Result = styled.Text`
  color: #fff;
  font-size: 24px;
  line-height: 32px;
`
