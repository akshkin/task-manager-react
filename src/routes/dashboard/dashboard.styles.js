import styled from "styled-components"

export const Container = styled.main`
  padding: 1em;
  background: url("/images/background.jpg");
  background: linear-gradient(145deg, #191654, #43C6AC );
  background-size: cover;
  min-height: 100vh;

  h2{
    color: white;
  }


  .row{
    display: flex;
    align-items: center;

    h3{
      color: white;
    }

    .icon{
      margin-left: 1em;
      color: #43C6AC;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`
export const SearchInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 0 5px 5px 0;
  border-left: none;
  font-family: inherit;
  height: 50px;
  padding: 0.5em;
  width: 100%;
  max-width: 472px;
  outline: none;
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  .icon{
    background-color: white;
    height: 50px;
    border-radius: 5px 0 0 5px;
    border: 1px solid lightgray;
    border-right: none;
    padding-left: 0.2em;
  }

`

export const Dialog = styled.dialog`
  border: none;
  padding: 2em;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &::backdrop{
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  form{
    display: flex;
    flex-direction: column;
    gap: 1em;
    
    input[type=text]{
      font-size: 1.2rem;
      height: 70px;
      padding: 0.5em;
      border: 0;
      outline: none;
      line-height: 1.5;
    }

    input[type=checkbox]{
      position: absolute;
      top: 60%;
      left: 11%; 
      opacity: 0;
    }

    .icon{
      color: #43C6AC;
    }

    .close-icon{
      align-self: flex-end;

    }

  }

`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
`
export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`
