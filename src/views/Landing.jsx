import React from "react";
import "./landing.css";
import stop from "../images/stop.png";

export default function Landing() {
  return (
    <div className="content">
      <h1>Message-Easy</h1>
      <h5>for children with mothers that obstruct contact</h5>
      <div className="image">
        <img src={stop} alt="stop" />
      </div>
      <input placeholder="name" />
      <input placeholder="password" />
      <button>Login</button>
      <p>click here to create an account</p>
    </div>
  );
}
