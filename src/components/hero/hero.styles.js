import styled from "styled-components"
import Button from "../button/button.component"

export const Container = styled.div`
  background: linear-gradient(145deg, #191654, #43C6AC );
  height: 100vh;
  max-width: 100%;

  h1{
    margin-top: 0;
    font-weight: 400;
    max-width: 600px;
    font-size: 3rem;
    padding: 1em;
    word-wrap: break-word;
    color: white;
  }

  @media (min-width: 700px){
    display: flex;
  }
`
export const BaseButton = styled(Button)`
  color: white;
  margin-left: 1em;
`