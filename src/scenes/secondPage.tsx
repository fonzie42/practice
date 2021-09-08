import styled from 'styled-components'
import { TitledBlock } from '../components/TitledBlock/titledBlock'

export const SecondPage = () => {
  const PageSection = styled.section`
    height: 580px;
    width: 100wh;
    background: #181718;
  `
  const texts = {
    title: 'STATUS QUO',
    text: 'A maioria das empresas utiliza várias ferramentas e processos complexos para fazer um único pagamento.',
  }

  return (
    <PageSection>
      <TitledBlock title={texts.title} text={texts.text}></TitledBlock>
    </PageSection>
  )
}
