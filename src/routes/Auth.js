import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { authService } from "../firebase";
import styled from "styled-components";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState();
  console.log(email, password);

  const onChange = (event) => {
    const target = event.target.name;
    if (target === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const onSubmitSignIn = async (event) => {
    try {
      const data = await createUserWithEmailAndPassword(
        authService,
        email,
        password
      );
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const onSubmitLogIn = async (event) => {
    try {
      const data = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">logo</div>
        <form onSubmit={onSubmitLogIn}>
          <input
            type="text"
            placeholder="Email"
            required
            onChange={onChange}
            value={email}
            name="email"
            style={{
              fontSize: "1rem",
              border: "none",
              borderBottom: "1px solid gray",
              paddingBottom: "0.5rem",
              outline: "none",
              width: "100%",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={onChange}
            required
            value={password}
            name="password"
            style={{
              fontSize: "1rem",
              border: "none",
              borderBottom: "1px solid gray",
              paddingBottom: "0.5rem",
              outline: "none",
              width: "100%",
            }}
          />
          <input
            type="submit"
            value="Login"
            onClick={() => onSubmitLogIn()}
            style={{
              border:'none',
              borderRadius:'4px',
              fontSize:'1rem',
              fontWeight:'bold',
              padding:'0.35rem 1rem',
              color:'white',
              outline:'none',
              cursor:'pointer',
              background:'grey',
              marginTop: '1rem',
            }}
          />
          <input
            type="submit"
            value="Create Account"
            onClick={() => onSubmitSignIn()}
            style={{
              border:'none',
              borderRadius:'4px',
              fontSize:'1rem',
              fontWeight:'bold',
              padding:'0.35rem 1rem',
              color:'white',
              outline:'none',
              cursor:'pointer',
              background:'grey',
              marginLeft: '1rem',
              marginTop: '1rem',
            }}
          />
        </form>
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spcing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

export default Auth;
