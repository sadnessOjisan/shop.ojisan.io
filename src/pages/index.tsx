import { GetStaticProps } from "next";
import Link from "next/link";
import { VFC } from "react";

import { ItemListItem } from "../components/item-list-item";
import { repository } from "../repository";
import { rootPageStyles } from "../style/index.css";
import { ShopItems } from "../validator";

type Props = {
  data: ShopItems;
};

const TopPage: VFC<Props> = (props) => {
  return (
    <div className={rootPageStyles.wrapper}>
      {props.data.contents.map((d) => (
        <Link href={`/items/${d.id}`} key={d.id}>
          <ItemListItem
            data={{
              id: d.id,
              name: d.name,
              price: d.price,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              categories: d.categories,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              images: d.images,
              description: d.description,
            }}
          />
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data = await repository.getAllItems();
  return {
    props: {
      data,
    },
  };
};

export default TopPage;
