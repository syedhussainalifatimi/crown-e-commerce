import React from "react";
import styles from './collectionpreview.module.scss'
import Collectionitem from "./collectionitem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className={styles.collectionpreview}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items.slice(0, 4).map(({ id, name, imageUrl, price }) => (
          <Collectionitem key={id} name={name} imageUrl={imageUrl} price={price} />
        ))}
      </div>
    </div>
  )
}
export default CollectionPreview;