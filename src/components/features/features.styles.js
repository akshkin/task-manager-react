import styled from "styled-components"

export const Container = styled.div`
  padding: 2em;

  button{
    display: block;
    margin: 0 auto;
  }
  
`

export const CardContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
`

export const Card = styled.div`
  padding: 1em;
  flex-grow: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 1em;

  .icon{
    font-size: 3.5rem;
    text-align: center;
    margin: 0 auto;
    color: #43C6AC;
  }


`
