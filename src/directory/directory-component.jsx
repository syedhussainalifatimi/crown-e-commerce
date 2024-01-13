import React, { useState } from "react";
import styles from './directory-component.module.scss';
import MenuItem from "../components/menu-item/menu-item-component";

const Directory = () => {
  const [section, setSection] = useState([
    {
      title: 'hats',
      imageUrl: 'url1',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'url2',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'url3',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'url4',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'url5',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ])
  return (
    <div className={styles.directorymenu}>
      {
        section.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))
      }
    </div>
  )

}
export default Directory;