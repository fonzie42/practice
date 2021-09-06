import styled from 'styled-components'

import {Heading} from '../components/Heading/heading'
import { NumberedBlock } from '../components/NumberedBlock/numberedBlock'

export const LandingPage = () => {

  const PageSection = styled.section`
    height: 85vh;
    background: #fff;
    display: grid;
    place-items: center;
  `

  const texts = [{
    number: 1,
    title: "Crie sua conta e faça uma recarga",
    text: "Transfira dinheiro para a sua wallet payfy"
  },
  {
    number: 2,
    title: "Defina suas regras de gastos",
    text: "Crie equipes, fluxos de aprovação e limites de gastos"
  },{
    number: 3,
    title: "Convide o seu time e dê um cartão",
    text: "Os funcionários podem pagar e enviar comprovantes"
  },
]

  return (
    <PageSection>
      <Heading text="Três etapas para gastos mais inteligentes"/>
      {texts.map(item => 
        <NumberedBlock 
          key={item.number} 
          numberTitle={item.number} 
          text={item.text} 
          title={item.title} />)
      }
    </PageSection>)
}