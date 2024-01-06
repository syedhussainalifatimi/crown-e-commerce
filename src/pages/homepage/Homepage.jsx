import React from "react";
import styles from './Homepage.module.scss'
import Directory from "../../directory/directory-component";
const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div >
  )
}
export default HomePage;