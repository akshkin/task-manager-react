import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import { StyledError} from "./error.styles"

function Error({ children }) {
  return (
    <StyledError>
      <ErrorIcon className='error-icon' />
      {children}
    </StyledError>
  )
}

export default Error