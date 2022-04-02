import { StyledItem, StyledItemHighligh, StyledItemText } from '../styles.js'

const Item = ({ vaga }) => {
  const { nome, salario, descricao, contato } = vaga
  return (
    <StyledItem>
      <StyledItemHighligh>{nome}</StyledItemHighligh>
      <StyledItemText>Salario: {salario}</StyledItemText>
      <StyledItemText>Salario: {salario}</StyledItemText>
      <StyledItemText>Descrição: {descricao}</StyledItemText>
      <StyledItemText>Contato: {contato}</StyledItemText>
    </StyledItem>
  )
}

export default Item
