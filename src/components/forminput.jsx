import React from "react";
import styles from './forminput.module.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {

  return (
    <div className={styles.group}>
      <input className={styles.forminput} onChange={handleChange} {...otherProps} />
      {label}
    </div>
  );
};

export default FormInput;