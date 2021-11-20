import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({title,description,backgroundImg,leftButtonText,rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
    <Fade top>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Fade top>
      <ButtonGroup>
        <LeftButton>{leftButtonText}</LeftButton>
        {rightBtnText?<RightButton>{rightBtnText}</RightButton>: null }
        
      </ButtonGroup>
      </Fade>
    </Wrap>
  );
}
export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;\
  background-image:${props=>`url("/images/images/${props.bgImage}")`}

  
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align:center;
  
`
const ButtonGroup=styled.div`
display:flex;
flex-direction:row;
margin-bottom:15vh;
@media screen and (max-width:768px){
    flex-direction:column;

    
}

`
const LeftButton=styled.div`
height:40px;
width:256px;
background-color: rgba(23,26,32,0.8);
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:10px;
`
const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
`
