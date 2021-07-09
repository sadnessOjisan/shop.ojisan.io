import { GetStaticPaths, GetStaticProps } from "next";
import { VFC } from "react";

import { repository } from "../../repository";
import { ShopItem } from "../../validator";

type Props = {
  data: ShopItem;
};

const TopPage: VFC<Props> = (props) => {
  return (
    <div>
      <h2>{props.data.name}</h2>
      <span>{props.data.status}</span>
      <span>{props.data.price}</span>
      {props.data.images.map((image) => (
        <img key={image.image.url} src={image.image.url} />
      ))}
      <a href="" target="_blank" rel='noreferrer'>
      <button>申し込む</button>
      </a>
      <p>※Google form からの申し込み以外にも Twitter DM からの申し込みも受け付けております。</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await repository.getAllShopItemIds();
  const ids = data.contents.map((d) => d.id);

  // Get the paths we want to pre-render based on posts
  const paths = ids.map((id) => ({
    params: { iid: id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const itemId = context.params["iid"];
  if (typeof itemId !== "string") throw new Error("invalid path");
  const data = await repository.getItemById(itemId);
  return {
    props: {
      data,
    },
  };
};

export default TopPage;
