import { VFC } from 'react'
import styled from 'styled-components'

interface TitledBlockProps {
  title: string
  text: string
}

const StyledHeading = styled.h3`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ff9052;
`

const StyledText = styled.p`
  font-size: 27px;
  line-height: 33px;
  text-align: left;
  color: #ffffff;
`

const WrapDiv = styled.div`
  height: 121px;
  width: 523px;
  justify-self: center;
`

export const TitledBlock: VFC<TitledBlockProps> = ({ title, text }) => {
  return (
    <WrapDiv>
      <StyledHeading>{title}</StyledHeading>
      <StyledText>{text}</StyledText>
    </WrapDiv>
  )
}
