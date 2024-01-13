import React from "react";
import styles from './custombutton.module.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      className={styles.custombutton}
      {...otherProps}>
      {children}
    </button>
  )
}
export default CustomButton;