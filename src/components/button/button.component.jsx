import React from 'react'
import { StyledButton } from './button.styles'

function Button({ children, ...restProps}) {
  return (
    <StyledButton {...restProps}>
      {children}
    </StyledButton>
  )
}

export default Button