import {VFC} from 'react'
import styled from 'styled-components'

interface NumberedBlockProps {
  numberTitle: number;
  title: string;
  text: string
}

const NumberHeading = styled.h3`
  color: #FF9052;
  font-size: 33px;
  line-height: 40.23px;
`

const StyledHeading = styled.h3`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`

const WrapDiv = styled.div`
height: 433px;
width: 207px;
justify-self: center;
`


export const NumberedBlock: VFC<NumberedBlockProps> = ({numberTitle, title, text}) => {
  return (
    <WrapDiv>
      <NumberHeading>{numberTitle}</NumberHeading>
      <StyledHeading>{title}</StyledHeading>
      <p>{text}</p>
    </WrapDiv>
  )
}
