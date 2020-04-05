import React from "react";
import styled from "styled-components";

function listPeople(people, friend) {
  return (
    <div className="people">
      {people.map((person, index) => (
        <div key={index} className="person">
          <h5>{person.name}</h5>
          <div className={friend ? "rem button" : "add button"}>
            {friend ? "-" : "+"}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Message(props) {
  return (
    <People>
      <h4>Friends</h4>
      {listPeople(props.people, props.friend)}
    </People>
  );
}

const People = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  max-height: 100%;
  padding-bottom: 20px;

  .people {
    width: 80%;
    overflow: scroll;
    -ms-overflow-style: none;
  }
  .people::-webkit-scrollbar {
    display: none;
  }

  .person {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    margin: 10px 0;
    border-radius: 5px;
    background: grey;
    .button {
      padding: 2px 5px;
    }
    .rem {
      background: #ce2029;
    }
    .add {
      background: green;
    }
  }
`;
