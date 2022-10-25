import styled from "styled-components"

export const Container = styled.main`
  padding: 1em;
  max-width: 600px;

  form{
    margin: 1em;
    max-width: 500px;
    input{
      margin-top: 1em;
    }
    input[type=number]{
      display: block;
    }
    button{
      display: inline-block;
      margin-right: 1em;
      margin-top: 1em;
    }
    .avatar-btn{
      display: flex;
      align-items: center;
      gap: 0.6em;
    }
  }

  @media (min-width: 900px) {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    form{
      flex-grow: 1;
      margin-left: 3em;
      margin-top: 4em;
    }
  }
`

export const DetailsContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;

  .icon{
    margin-top: 0.5em;
  }
`

export const Details = styled.div`
`