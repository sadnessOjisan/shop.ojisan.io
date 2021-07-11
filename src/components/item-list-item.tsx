import { VFC } from "react";

type Props = {
  data: {
    id: string;
    name: string;
    price: number;
    categories: { id: string; name: string }[];
    images: { image: { url: string } }[];
  };
};

export const ItemListItem: VFC<Props> = (props) => {
  console.log(props);
  return (
    <div>
      <span>{props.data.name}</span>
      <span>{props.data.price}円</span>
      <span>
        {props.data.categories.map((c) => (
          <span key={c.id}>{c.name}</span>
        ))}
      </span>
      {props.data.images.map((image) => (
        <img src={image.image.url} key={image.image.url}></img>
      ))}
    </div>
  );
};
