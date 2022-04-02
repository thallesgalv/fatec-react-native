import React from 'react'
import Item from './components/Item'
import { StyledScrollView, Tittle, Wrapper } from './styles'

export default function App() {
  const smartwatchIMG =
    'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
  const phoneIMG =
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
  const laptopIMG =
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
  const headphonesIMG =
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
  const keyboardIMG =
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'

  return (
    <Wrapper>
      <Tittle>Anúncios</Tittle>
      <StyledScrollView horizontal={true}>
        <Item name='Smartwatch' price='R$ 3.000,00' img={smartwatchIMG} />
        <Item name='Smartphone' price='R$ 4.500,00' img={phoneIMG} />
        <Item name='Laptop' price='R$ 7.000,00' img={laptopIMG} />
        <Item name='Headphone' price='R$ 650,00' img={headphonesIMG} />
        <Item name='Teclado' price='R$ 400,00' img={keyboardIMG} />
      </StyledScrollView>
    </Wrapper>
  )
}
