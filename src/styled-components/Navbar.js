import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  top: 0px;
  background-color: #ffffff;
  align-items: center;
  padding-top: 6px;
  justify-content: space-between;
  padding-left: 11%;
  padding-right: 15%;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 1px 0.5px #ccc;
`;

export const InputSearch = styled.input`
  border: none;
  background: #eef3f7;
  padding: 5px;
  padding-left: 40px;
  border-radius: 5px;
  margin: 0px 10px;
  outline: none;
  font-size: 14px;
  width: 250px;
  &:focus {
    width: 350px;
  }
`;

export const MenuItems = styled.div`
  display: flex;
`;
export const MenuItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
  justify-content: center;
  cursor: pointer;
  &:hover svg,
  div {
    fill: #000;
  }
  min-width: 70px;
`;

export const MenuItemName = styled.div`
  font-size: 12px;
`;
