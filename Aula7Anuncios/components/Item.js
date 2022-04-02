import { StyledImage, StyledItem, StyledItemText } from '../styles.js'

const Item = ({ name, price, img }) => {
  return (
    <StyledItem>
      <StyledImage source={{ uri: img }}></StyledImage>
      <StyledItemText>{name}</StyledItemText>
      <StyledItemText>{price}</StyledItemText>
    </StyledItem>
  )
}

export default Item
