import React from "react";
import styles from './menu-item-component.module.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} ${styles.menuitem}`}>

      <div className={styles.backgroundimage}
        style={
          { backgroundImage: `url(${imageUrl})` }
        } />


      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>

    </div >
  )
};
export default MenuItem;