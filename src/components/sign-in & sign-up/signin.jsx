import React from 'react';
import styles from './signin.module.scss';
import FormInput from "../sign-in & sign-up/forminput";
import CustomButton from "../sign-in & sign-up/custombutton";
import { auth, signInWithGoogle } from '../../firebase/firebase';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  render() {
    return (
      <div className={styles.signin}>
        <h1>I have already an Account</h1>
        <p>Sign In with your email and password</p>

        <form className={styles.forms} onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className={styles.buttondiv}>
            <CustomButton type="submit">
              Sign In
            </CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
