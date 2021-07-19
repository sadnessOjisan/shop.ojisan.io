import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { VFC } from "react";

import { ItemListItem } from "../../components/item-list-item";
import { Layout } from "../../components/layout";
import { META_TAG_CONTENT } from "../../const";
import { repository } from "../../repository";
import { itemDetailPageStyle } from "../../style/item-detail-page.css";
import { tagDetailPageStyle } from "../../style/tag-detail-page.css";
import { ShopItems, Tag } from "../../validator";

type Props = {
  data: ShopItems;
  tag: Tag;
};

const TagDetail: VFC<Props> = (props) => {
  return (
    <Layout>
      <Head>
        <title>{`${props.tag.name} | ${META_TAG_CONTENT.siteTitle}`}</title>
        <meta
          property="og:url"
          content={`${META_TAG_CONTENT.origin}/tags/${props.tag.id}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${props.tag.name} | ${META_TAG_CONTENT.siteTitle}`}
        />
        <meta
          property="og:description"
          content={`${props.tag.name} を買うなら ${META_TAG_CONTENT.siteTitle}！！sadnessOjisan の不用品を購入できるサイトです。`}
        />
        <meta property="og:site_name" content={META_TAG_CONTENT.siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={META_TAG_CONTENT.twitterName} />
        <meta name="twitter:creator" content={META_TAG_CONTENT.twitterName} />
      </Head>

      <div className={itemDetailPageStyle.wrapper}>
        <h2 className={tagDetailPageStyle.title}>{props.tag.name}</h2>
        <div className={tagDetailPageStyle.items}>
          {props.data.contents.map((d) => (
            <Link href={`/items/${d.id}`} key={d.id}>
              <a className={tagDetailPageStyle.itemLink}>
                <ItemListItem
                  className={tagDetailPageStyle.itemListWrapper}
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
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await repository.getAllTags();
  const ids = data.contents.map((d) => d.id);

  // Get the paths we want to pre-render based on posts
  const paths = ids.map((id) => ({
    params: { tid: id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const tagId = context.params ? context.params["tid"] : undefined;
  if (typeof tagId !== "string") throw new Error("invalid path");
  const data = await repository.getItemsByTagId(tagId);
  const tag = await repository.getTagById(tagId);
  return {
    props: {
      data,
      tag,
    },
  };
};

export default TagDetail;
