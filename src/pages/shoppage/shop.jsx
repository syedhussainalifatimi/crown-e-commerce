import React from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/menu-item/collectionpreview";


function ShopPage() {
  const collectionData = SHOP_DATA;
  return (
    <div >
      {
        collectionData.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />

        ))}
    </div >
  )
}
export default ShopPage;