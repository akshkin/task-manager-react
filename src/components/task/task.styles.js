import styled from "styled-components"

export const MyTask = styled.div`
  max-width: 500px;
  border-radius: 5px;
  padding: 1em;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows : repeat(2, 1fr);
  align-items: center;
     

  p{
    grid-row: 1/-1;
    grid-column: 1/-1;
  }
  .buttons{
    grid-column: 2/-1;
    justify-self: flex-end;

    button{
      border: none;
      background-color: white;

      
      .icon{
        color: #43C6AC;
        cursor: pointer;

        &:hover,
        &:focus{
          color: #191654;
        }
      }
    }
  }


  small{
    color: darkgray;
    font-size: 0.75rem;
    display: inline-block;
    grid-column: 1/2;
    
  }
`