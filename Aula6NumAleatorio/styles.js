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
export const StyledImage = styled.Image`
  border-radius: 6px;
  width: 160px;
  height: 160px;
  margin-bottom: 32px;
`

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: '#aaa',
})`
  width: 200px;
  margin-top: 16px;
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 16px;
  color: #fff;
`

export const StyledText = styled.Text`
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin: 8px 0;
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
  text-align: center;
`

export const ResultSucess = styled.Text`
  color: #50fa7b;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
`
export const ResultFail = styled.Text`
  color: #ff5555;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
`
export const Disclaimer = styled.Text`
  color: #ffb86c;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-style: italic;
`
