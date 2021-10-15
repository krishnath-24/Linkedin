import React from "react";
import { Linkedin } from "react-bootstrap-icons";
import styled from "styled-components";
import LoginCard from "../components/login/LoginCard";
import LoginFooter from "../components/login/LoginFooter";
import { DivFlex } from "../styled-components/common/CommonStyles";

function Login() {
  return (
    <Container className="relative">
      <DivFlex col={true}>
        <DivFlex align="center" className="text-2xl font-extrabold mb-5">
          <span className="mr-1" style={{ color: "#0b65c2" }}>
            Linked
          </span>
          <Linkedin size={28} fill="#0B65C2" />
        </DivFlex>
        <LoginCard />
      </DivFlex>
      <DivFlex className="my-7">
        <span className="join-now">New to LinkedIn?</span>
        <span className="mx-2 text-blue-600 font-bold">Join now</span>
      </DivFlex>
      <LoginFooter />
    </Container>
  );
}

export default Login;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
