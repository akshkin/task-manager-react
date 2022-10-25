import styled from "styled-components"

export const Container = styled.div`
  margin: 2em;
  padding: 2em;
  max-width: 400px;  
  margin:  0 auto;
  border: 1px solid lightgray;
  border-radius: 5px;

  h2{
      text-align: center;
    }

  form{
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1em;  

    
    .btn{
      border: none;
      font-family: inherit;
      background: white;
      cursor: pointer;
    }
  }
`
export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
  height: 40px;
  padding: 0.5em;
  font-family: inherit;
`