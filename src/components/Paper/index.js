import React from 'react'
import styled from 'styled-components'

const StyledPaper = styled.div`
  width: 140px;
  height: 200px
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  margin: ${props => props.margin};
`

function Paper({ margin,children }) {
  return <StyledPaper margin={margin}>{children}</StyledPaper>
}

export default Paper
