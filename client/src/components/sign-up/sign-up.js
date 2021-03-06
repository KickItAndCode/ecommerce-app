import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import styled from "styled-components";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

const SignUp = () => {
  const [SignUpState, setSignUpState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = SignUpState;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setSignUpState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setSignUpState({ ...SignUpState, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = SignUpState;

  return (
    <SignUpContainer>
      <SignUpTitle className="title">I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
