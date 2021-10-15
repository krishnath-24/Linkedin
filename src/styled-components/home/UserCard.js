import styled from "styled-components";

export const UserCard = styled.div`
  position: absolute;
  top: 28px;
  left: 0;
  left: -220px;
  width: 250px;
  background-color: white;
  border-radius: 9px;
  border-top-right-radius: 0px;
  transition: all 50ms ease-in-out;
  box-shadow: 0px 1px 4px 1px #aaa9a2;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export const ViewProfileButton = styled.div`
  box-sizing: border-box;
  color: #0b65c2;
  font-size: 15px;
  height: 25px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #0b65c2;
  font-weight: bold;
  margin-top: 8px;
  &:hover {
    box-shadow: inset 0 0 0 1px #0b65c2;
    background: rgb(209, 231, 249);
  }
  transition: box-shadow 50ms ease-in-out;
`;
