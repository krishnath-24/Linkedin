import { TextField } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { setEmail, setName } from "../../slices/userSlice";
import { Card } from "../../styled-components/common/CommonStyles";

function LoginCard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUserLogin = () => {
    console.log("login");
    history.push("/");
    dispatch(setName({ name: "Anuj Sharma" }));
    dispatch(setEmail({ email: "sharma.anuj2498@gmail.com" }));
  };
  return (
    <Card
      width="420px"
      height="380px"
      shadow="0px 4px 10px 5px #ecebeb"
      radius="10px"
      className="p-7 mb-5"
    >
      <div className="text-3xl font-bold mt-2">Sign in</div>
      <div className="text-sm font-medium text-gray-800 my-2 mb-6">
        Stay updated on your professional world
      </div>
      <TextField
        id="outlined-basic"
        placeholder="Email or Phone"
        variant="outlined"
        type="text"
        fullWidth
      />
      <div className="my-5">
        <TextField
          type="password"
          id="outlined-basic"
          placeholder="Password"
          variant="outlined"
          fullWidth
        />
      </div>
      <ForgotPassword className="cursor-pointer font-bold mt-2 mb-7">
        Forgot password?
      </ForgotPassword>
      <SignInButton onClick={handleUserLogin} className="sign-in mt-4">
        Sign In
      </SignInButton>
    </Card>
  );
}

export default LoginCard;
export const ForgotPassword = styled.div`
  color: #0b65c2;
  width: fit-content;
  border-radius: 30px;
  margin-left: -5px;
  padding: 6px;
  cursor: pointer;
  transition: all 80ms ease-in-out;
  &:hover {
    text-decoration: underline;
    background-color: #d0e8ff;
  }
`;

export const SignInButton = styled.div`
  background-color: #0b65c2;
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 13px;
  border-radius: 30px;
  transition: all 80ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #004182;
  }
`;
