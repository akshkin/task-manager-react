import styled from "styled-components"

export const StyledButton = styled.button`
  color:${({color}) => color};
  background: transparent;
  border: 2px solid #43C6AC;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  border-radius: 5px;
  font-size: 0.875rem;
  margin: ${({margin}) => margin};
  cursor: pointer;
  transition: background 0.5s ease-in-out;
  
  &:hover,
  &:focus{
    color: white;
    background: #191654;
  }

`