import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../actions/articleActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import TextEditor from "../components/TextEditor";

export default function SigninScreen(props) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card">
      <form className="signin-form">
        <div>
          <h1>Sign in</h1>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-primary btn-block" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
