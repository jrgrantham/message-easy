import React from "react";
import styled from "styled-components";
import { people, messages } from "../data/people";
import People from './People'
import Conversation from "./Conversation";

export default function Message() {
  return (
    <MessagePage>
      {/* <h2 className="user">James</h2> */}

      <div className="interface">
        <People people={people} friend={false} />
        <Conversation messages={messages}/>
        <People people={people} friend={true} />
      </div>
    </MessagePage>
  );
}

const MessagePage = styled.div`
  max-width: 100%;
  max-width: 1200px;
  max-height: 100%;
  
  h2 {
    height: 200px;
    border: 1px solid red;
  }
  h4 {
    margin: 10px 0;
  }

  .interface {
    // border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    width: 100%;
    height: 100%;
  }
`;
