import { VFC } from "react";

import { itemListItemStyles } from "../style/item-list-item.css";

type Props = {
  className: string;
  data: {
    id: string;
    name: string;
    price: number;
    categories: { id: string; name: string }[];
    images: { image: { url: string } }[];
  };
};

export const ItemListItem: VFC<Props> = (props) => {
  return (
    <div className={`${itemListItemStyles.wrapper} ${props.className}`}>
      <img
        src={props.data.images[0].image.url}
        className={itemListItemStyles.image}
      />
      <div className={itemListItemStyles.infoBox}>
        <span
          className={`${itemListItemStyles.infoBoxItem} ${itemListItemStyles.title}`}
        >
          {props.data.name}
        </span>
        <span className={itemListItemStyles.infoBoxItem}>
          {props.data.price}円
        </span>
        <span
          className={`${itemListItemStyles.infoBoxItem} ${itemListItemStyles.tips}`}
        >
          {props.data.categories.map((c) => (
            <div key={c.id} className={itemListItemStyles.category}>
              {c.name}
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};
