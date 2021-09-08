import styled from 'styled-components'

import { Heading } from '../components/Heading/heading'
import { NumberedBlock } from '../components/NumberedBlock/numberedBlock'

export const LandingPage = () => {
  const PageSection = styled.section`
    margin: auto;
    height: 85vh;
    width: 100vh;
    background: #e5e5e5;
    display: grid;
    align-items: center;
  `

  const texts = [
    {
      number: 1,
      title: 'Crie sua conta e faça uma recarga',
      text: 'Transfira dinheiro para a sua wallet payfy',
    },
    {
      number: 2,
      title: 'Defina suas regras de gastos',
      text: 'Crie equipes, fluxos de aprovação e limites de gastos',
    },
    {
      number: 3,
      title: 'Convide o seu time e dê um cartão',
      text: 'Os funcionários podem pagar e enviar comprovantes',
    },
  ]

  const WrapDiv = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 0px;
    align-self: center;
  `

  return (
    <PageSection>
      <Heading text="Três etapas para gastos mais inteligentes" />
      <WrapDiv>
        {texts.map((item) => (
          <NumberedBlock
            key={item.number}
            numberTitle={item.number}
            text={item.text}
            title={item.title}
          />
        ))}
      </WrapDiv>
    </PageSection>
  )
}
