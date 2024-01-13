import React from "react";
import styles from './signinandsignup.module.scss';
import SignIn from "./signin";
import SignUp from "./signup";
const SignInAndSignUp = () => {


  return (
    <div className={styles.signinandsignup}>
      <SignIn />
      <SignUp />
    </div>
  )
}
export default SignInAndSignUp;