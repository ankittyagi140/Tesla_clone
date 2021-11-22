import React from "react";
import styled from "styled-components";

const Modelinfo = ({ title, subtitle, milage, speed, mdImage }) => {
  return (
    <Continer modelImage={mdImage}>
      <Modeltype>
        <h1>{title}</h1>
        <span>{subtitle}</span>
      </Modeltype>
      <Carinfo>
        <Modeldetail>
          <li>{milage}</li>
          <li>{speed}</li>
          <li>milage</li>
          <li>KM</li>
        </Modeldetail>
        <OrderButton>Order NOw</OrderButton>
      </Carinfo>
    </Continer>
  );
};
export default Modelinfo;
const Continer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/images/${props.modelImage}")`};
`;
const Carinfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
const Modeltype = styled.div`
  padding-top: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Modeldetail = styled.div`
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;

  li {
    list-style: none;
    margin: 30px;
  }
`;
const OrderButton = styled.div`
  height: 40px;
  width: 180px;
  color: white;
  border: 4px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 20px;
  :hover {
    background-color: white;
    color: black;
  }
`;
