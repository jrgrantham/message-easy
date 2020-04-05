import React from "react";
import stop from "../images/stop.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Content className="content">
      <h1>Message-Easy</h1>
      <h5>for children with mothers that obstruct contact</h5>
      <div className="image">
        <img src={stop} alt="stop" />
      </div>
      <input placeholder="name" />
      <input placeholder="password" />
      <Link to='/message'>
        <button>Login</button>
      </Link>
      <p>click here to create an account</p>
    </Content>
  );
}

const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media(max-width: 600px) {
    h5 {
      font-size: 1.2rem;
    }
    h1 {
      font-size: 2.5rem;
    }
  }

  h5 {
    @media(max-height: 700px) {
      margin-bottom: 40px;
    }
  }

  .image {
    width: 200px;
    margin: 40px;

    @media(max-height: 700px) {
      display: none;
    }
  }
`