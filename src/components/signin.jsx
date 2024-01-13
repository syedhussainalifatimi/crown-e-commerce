import React, { useState } from "react";
import styles from './signin.module.scss';
import FormInput from "./forminput";
import CustomButton from "./custombutton";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignInData({
      email: '',
      password: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className={styles.signin}>
      <h1>I have all ready an Account</h1>
      <p>Sign In with your email and password</p>

      <form className={styles.forms} onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={signInData.email}
          handleChange={handleChange}
          label="email"
          required
        />
        {/*wase from input component ki zarorat nhi thi but us ki styling unique thi is liya add kiya*/}

        <FormInput
          type="password"
          name="password"
          value={signInData.password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className={styles.buttondiv}>
          <CustomButton type="submit">
            Sign In
          </CustomButton>

          <CustomButton type="submit">
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
