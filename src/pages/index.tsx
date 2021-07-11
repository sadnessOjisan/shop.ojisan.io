import { GetStaticProps } from "next";
import Link from "next/link";
import { VFC } from "react";
import Image from "next/image";
import { ItemListItem } from "../components/item-list-item";
import { Layout } from "../components/layout";
import { repository } from "../repository";
import { rootPageStyles } from "../style/index.css";
import { ShopItems } from "../validator";

type Props = {
  data: ShopItems;
};

const TopPage: VFC<Props> = (props) => {
  return (
    <div className={rootPageStyles.wrapper}>
      <Layout>
        <img src="/shop.png" className={rootPageStyles.keyVisual} />
        <h2 className={rootPageStyles.title}>ITEMS</h2>
        <div className={rootPageStyles.items}>
          {props.data.contents.map((d) => (
            <Link href={`/items/${d.id}`} key={d.id}>
              <a className={rootPageStyles.itemLink}>
                <ItemListItem
                  className={rootPageStyles.itemListWrapper}
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
                  }}
                />
              </a>
            </Link>
          ))}
        </div>
      </Layout>
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
