import React from "react";
import styled from "styled-components";
import { messages } from "../data/people";

function listMessages(messages) {
  return (
    <div className="messages">
      {messages.map((message, index) => (
        <div key={index} className={message.received ? "left" : "right"}>
          <p className="message">{message.content}</p>
        </div>
      ))}
    </div>
  );
}

export default function Conversation() {
  return (
    <MessagePage>
      <div className="reading">
        <h4>Conversation</h4>
        {listMessages(messages)}
      </div>
      <div className="sending">
        <textarea />
        <button>Send</button>
      </div>
    </MessagePage>
  );
}

const MessagePage = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 100%;

  .messages {
    overflow: auto;
    -ms-overflow-style: none;
  }
  .messages::-webkit-scrollbar {
    display: none;
  }
  
  .left {
    .message {
      background: green;
    }
  }
  .right {
    flex-direction: row;
    justify-content: flex-end;
    .message {
      background: blue;
    }
  }

  .message {
    width: 80%;
    padding: 5px 20px;
    margin: 10px 0;
    border-radius: 5px;
  }
  .reading {
    // border: 1px solid red;
    height: calc(100% - 200px)
  }
  .sending {
    // border: 1px solid red;
    height: 200px;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }

  textarea {
    padding: 10px 20px;
    font-size: 15px;
    width: 100%;
    height: 100px;
    border-radius: 15px;
    border: none;
    text-align: center;
    background-color: lightgray;
  }

`;
