import styled from "styled-components";

export const DivFlex = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "")};
  flex-direction: ${(prop) => (prop.col ? "column" : "row")};
  align-items: ${(prop) => (prop.align ? prop.align : "")};
  justify-content: ${(prop) => (prop.justify ? prop.justify : "")};
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 7px;
  box-shadow: ${(props) =>
    props.shadow ? props.shadow : "0px 0px 1px 0.5px #ccc"};
  width: ${(props) => (props.width ? props.width : "")};
  border-radius: ${(props) => (props.radius ? props.radius : "")};
  height: ${(props) => (props.height ? props.height : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
`;

export const Seperator = styled.hr`
  width: 100%;
  border-color: ${(prop) => (prop.color ? prop.color : "")};
`;
