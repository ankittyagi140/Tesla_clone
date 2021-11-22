import React, { useState } from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function Chatbot() {
  const [chatDialog, setChatDialog] = useState(false);
  return (
    <ChatContainer>
      <ChatbotIcon onClick={() => setChatDialog(true)} sx={{ fontSize: 60 }} />
      {chatDialog ? (
        <ChatForm>
          <UpperForm>
            <TextItem>Chat With Us</TextItem>
            <CustomClose onClick={() => setChatDialog(false)} fontSize="large" color="white"/>
          </UpperForm>
        </ChatForm>
      ) : null}
    </ChatContainer>
  );
}
export default Chatbot;

const ChatContainer = styled.div`

`


const ChatbotIcon = styled(ChatOutlinedIcon)`
  position: fixed;
  z-index: 1000;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
`;
const ChatForm = styled.div`
  position: fixed;
  background-color: #dddddd;
  height: 60vh;
  width: 320px;
  bottom: 30px;
  right: 20px;
  border-radius: 10px;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  background-color:white;
  border:2px solid #333634;
  border-radius:4px;
  :hover {
  }
`;
const TextItem = styled.div`
  padding-left: 100px;
  padding-top: 17px;
  text-transform: uppercase;
  font-size: 18px;
  color:white;
`;
const UpperForm = styled.div`
border:2px solid white;
  border-radius: 8px;

  background-color: #333634;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  height:15%;
`;
