import React, { useState } from "react";
import styled from "styled-components";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSeconday";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
    console.log("you are sign in")
  };
  return (
    <Wrap>
    <Logo>
        <Link to="/">
          <img src="/images/images/logo.svg" alt="Tesla header" />
        </Link>
      </Logo>
      <Container>
        <FormContainer>
          <FormInput>
            <h1>Sign In</h1>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <ButtonPrimary
              type="submit"
              name="sign-in"
              onClick={SignIn}
            ></ButtonPrimary>
          </FormInput>
          <Devider>
            <hr />
            OR
            <hr />
          </Devider>
          <Link to="/signup">
            <ButtonSecondary name="Create Account"></ButtonSecondary>
          </Link>
        </FormContainer>
      </Container>
    </Wrap>
  );
};
export default Login;
const Wrap = styled.div`
  heigh: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FormInput = styled.div`
  min-width: 330px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  label {
    color: #5c5e62;
    font-weight: 500;
    font-size: 20px;
    margin-left: 10px;
  }
  input {
    margin-bottom: 20px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    padding: 12px 20px;
    border-radius: 50px;
    color: #393c41;
    font-weight: 600;
  }
  input:focus {
    border: 2px solid #d6d6d6;
    transition: all 0.2s;
  }
  h1 {
    font-weight: 500;
    font-size: 50px;
    margin-left: -10px;
    margin-bottom: 20px;
  }
`;
const Devider = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  hr{
      width:40%;
      height:0;
      opacity:0.3;
  }
`;
const FormContainer = styled.div`
  padding-top: 30px;
`;
const Logo = styled.div`
margin:16px 20px;
:hover{
  background-color: transparent !important;
}`;