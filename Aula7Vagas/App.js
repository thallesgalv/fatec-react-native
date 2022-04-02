import React from 'react'
import Item from './components/Item'
import { StyledScrollView, Tittle, Wrapper } from './styles'

export default function App() {
  const vagas = [
    {
      id: 0,
      nome: 'Desenvolvedor Mobile Jr',
      salario: 'R$ 5.000,00',
      descricao:
        'Vaga para desenvolvedor mobile. Necessário React Native e Flutter.',
      contato: 'mandecv@gmail.com',
    },
    {
      id: 1,
      nome: 'Desenvolvedor Front-End Pleno',
      salario: 'R$ 7.000,00',
      descricao:
        'Vaga para desenvolvedor front-end web. Necessário React e Vue.',
      contato: 'mandecv@gmail.com',
    },
    {
      id: 2,
      nome: 'Desenvolvedor Back-End Sênior',
      salario: 'R$ 12.000,00',
      descricao:
        'Vaga para desenvolvedor back-end sênior. Necessário Node.Js e Python.',
      contato: 'mandecv@gmail.com',
    },
    {
      id: 3,
      nome: 'QA Testes',
      salario: 'R$ 4.500,00',
      descricao: 'Vaga para desenvolvedor mobile. Necessário Jest e Cypress.',
      contato: 'mandecv@gmail.com',
    },
    {
      id: 4,
      nome: 'Desenvolvedor Mobile Jr',
      salario: 'R$ 5.000,00',
      descricao:
        'Vaga para desenvolvedor mobile. Necessário React Native e Flutter.',
      contato: 'mandecv@gmail.com',
    },
    {
      id: 5,
      nome: 'Desenvolvedor Front-End Pleno',
      salario: 'R$ 7.000,00',
      descricao:
        'Vaga para desenvolvedor front-end web. Necessário React e Vue.',
      contato: 'mandecv@gmail.com',
    },
    {
      id: 6,
      nome: 'Desenvolvedor Back-End Sênior',
      salario: 'R$ 12.000,00',
      descricao:
        'Vaga para desenvolvedor back-end sênior. Necessário Node.Js e Python.',
      contato: 'mandecv@gmail.com',
    },
    {
      id: 7,
      nome: 'QA Testes',
      salario: 'R$ 4.500,00',
      descricao: 'Vaga para desenvolvedor mobile. Necessário Jest e Cypress.',
      contato: 'mandecv@gmail.com',
    },
  ]

  return (
    <Wrapper>
      <Tittle>Vagas</Tittle>
      <StyledScrollView>
        {vagas.map(vaga => (
          <Item vaga={vaga} key={vaga.id} />
        ))}
      </StyledScrollView>
    </Wrapper>
  )
}
