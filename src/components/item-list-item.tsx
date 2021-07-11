import { VFC } from "react";

import { itemListItemStyles } from "../style/item-list-item.css";
import { createPriceString } from "../util/price";
import { Tags } from "./tags";

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
          {createPriceString(props.data.price)}
        </span>
        <Tags
          tags={props.data.categories}
          className={itemListItemStyles.tips}
        />
      </div>
    </div>
  );
};
