import {VFC} from 'react'
import styled from 'styled-components'

interface HeadingProps {
  text: string
}

const StyledHeading = styled.h2`
  font-weight: 700;
  font-size: 33px;
  line-height: 40.23px;
  color: #1B1B1B;
  margin: 0;
`


export const Heading: VFC<HeadingProps> = ({text}) => {
  return <StyledHeading>{text}</StyledHeading>
}