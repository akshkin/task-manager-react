import styled from "styled-components";
import Button from "../button/button.component";

export const Container = styled.div`
  background: linear-gradient(145deg, #191654, #43c6ac);
  height: 80vh;
  max-width: 100%;

  h1 {
    margin-top: 0;
    font-weight: 400;
    max-width: 600px;
    font-size: 3rem;
    padding: 1em;
    word-wrap: break-word;
    color: white;
    margin-bottom: 0;
  }

  p {
    color: #e3e3e3;
    margin-top: 0;
    padding: 1em;
    margin-left: 2em;
    word-wrap: break-word;
  }

  @media (min-width: 700px) {
    display: flex;
  }
`;
export const BaseButton = styled(Button)`
  color: white;
  margin-left: 1em;
`;
