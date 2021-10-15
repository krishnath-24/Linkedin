import React from "react";
import Main from "../components/home/Main/Main";
import { Container } from "../styled-components/home/Home";
import LeftContent from "../components/home/LeftContent/LeftContent";
import RightContent from "../components/home/RightContent/RightContent";

export default function Home() {
  return (
    <Container>
      <LeftContent />
      <Main />
      <RightContent /> 
    </Container>
  );
}
