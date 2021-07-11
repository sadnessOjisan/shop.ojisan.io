import { VFC } from "react";

import { itemDetailPageStyle } from "../style/item-detail-page.css";
import { itemListItemStyles } from "../style/item-list-item.css";
import { createPriceString } from "../util/price";
import { StatusTip } from "./status-tip";
import { Tags } from "./tags";

type Props = {
  className: string;
  data: {
    id: string;
    name: string;
    price: number;
    status: "販売中" | "商談中" | "売り切れ";
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
        <StatusTip
          status={props.data.status}
          className={itemListItemStyles.infoBoxItem}
        />
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
