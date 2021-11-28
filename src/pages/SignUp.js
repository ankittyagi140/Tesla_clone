import React,{useState} from "react";
import styled from "styled-components";
import ButtonPrimary from "../components/ButtonPrimary";
import { Link } from "react-router-dom";

const SignUp = () => {
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[confirmPassword, setConfirmPassword]=useState('');

    const SignUp=()=>{

    }
    return(
        <Wrap><Logo>
        <Link to="/">
          <img src="/images/images/logo.svg" alt="Tesla header" />
        </Link>
      </Logo>
          <Container>
        <FormInput>
          <h1>Sign Up</h1>
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label htmlFor="email"> Enter Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <ButtonPrimary type="submit" name="sign-Up" onClick={SignUp}></ButtonPrimary>
        </FormInput>
      </Container>
    </Wrap>
  );
};
export default SignUp;
const Wrap = styled.div`
  heigh: 100vh;
`;

const Container = styled.div`
padding-top:30px;
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
const Logo = styled.div`
margin:18px 20px;
:hover{
  background-color: transparent !important;
}`;