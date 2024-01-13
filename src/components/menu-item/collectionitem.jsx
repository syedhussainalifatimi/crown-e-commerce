import React from "react";
import styles from './collectionitem.module.scss';
const Collectionitem = ({ imageUrl, name, price }) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <div className={styles.nameprice}>
        <h5>{name.toUpperCase()}</h5>
        <h5>${price}</h5>
      </div>
    </div>
  )
}
export default Collectionitem;