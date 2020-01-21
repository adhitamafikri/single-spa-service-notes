import React from 'react'
import styled from 'styled-components'

const StyledPane = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-wrap: ${props => props.flexWrap};
  margin: ${props => props.margin};
`

function Pane({
  width,
  height,
  display,
  justifyContent,
  alignItems,
  flexWrap,
  margin,
  children,
}) {
  return (
    <StyledPane
      width={width}
      height={height}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      margin={margin}
    >
      {children}
    </StyledPane>
  )
}

export default Pane
