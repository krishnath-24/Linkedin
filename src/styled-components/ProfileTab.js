import styled from "styled-components";

export const UserCircle = styled.img`
  src: ${(props) => props.src};
  height: ${(props) => props.height ? props.height : "25px"};
  width: ${(props) => props.width || "25px"};
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
`;
