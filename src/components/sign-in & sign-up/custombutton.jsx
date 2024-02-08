import React from "react";
import styles from './custombutton.module.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? styles.googlesignin : ''} ${styles.custombutton}`}
      {...otherProps}>
      {children}
    </button>
  )
}
export default CustomButton;