import styled from "styled-components";

export const StyledNavbar = styled.header`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  h5 {
    margin: 0;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
export const Column = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  .arrow {
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #43c6ac;
  color: white;
  display: grid;
  place-items: center;
  font-size: 1rem;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  height: ${({ dropdown }) => (dropdown === true ? "auto" : "0px")};
  opacity: ${({ dropdown }) => (dropdown === true ? "1" : "0")};
  transition: height 0.3s;
  width: 200px;
  top: 80%;
  right: 5%;
  background: white;
  padding: 1em;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;

    .row {
      display: flex;
      align-items: center;
      gap: 0.3em;
    }

    li {
      line-height: 3;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background-color: #43c6ac;
        padding: 0.3em;
        color: white;
      }
    }
  }
`;
