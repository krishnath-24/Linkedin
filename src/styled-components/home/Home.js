import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  padding-left: 11%;
  padding-right: 10%;
  justify-content: space-between;
  background-color: #f3f2ee;
  min-height: 100vh;
  padding-top: 40px;
  min-height: 100vh;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: none;
  max-width: 600px;
`;

export const LeftContent = styled.div``;
export const RightContent = styled.div``;

export const UserAnalyticsCard = styled.div`
  position: sticky;
  align-self: flex-start;
  width: 220px;
  height: auto;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: white;
`;
