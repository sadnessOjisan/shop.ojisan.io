import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { VFC } from "react";

import { ItemListItem } from "../components/item-list-item";
import { Layout } from "../components/layout";
import { META_TAG_CONTENT } from "../const";
import { repository } from "../repository";
import { rootPageStyles } from "../style/index.css";
import { RecursiveRequired } from "../type/util";
import { ShopItems } from "../validator";

type Props = {
  data: RecursiveRequired<ShopItems>;
};

const TopPage: VFC<Props> = (props) => {
  return (
    <div className={rootPageStyles.wrapper}>
      <Head>
        <title>{META_TAG_CONTENT.siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={`${META_TAG_CONTENT.origin}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={META_TAG_CONTENT.siteTitle} />
        <meta
          property="og:description"
          content={META_TAG_CONTENT.description}
        />
        <meta property="og:site_name" content={META_TAG_CONTENT.siteTitle} />
        <meta
          property="og:image"
          content={`${META_TAG_CONTENT.origin}/shop.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={META_TAG_CONTENT.twitterName} />
        <meta name="twitter:creator" content={META_TAG_CONTENT.twitterName} />
      </Head>
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
                    categories: d.categories,
                    images: d.images,
                    status: d.status,
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
