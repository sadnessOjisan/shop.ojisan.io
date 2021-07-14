import Parser from "markdown-it";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { VFC } from "react";
import sanitizeHtml from "sanitize-html";

import { Layout } from "../../components/layout";
import { Tags } from "../../components/tags";
import { META_TAG_CONTENT } from "../../const";
import { useItemDetailPage } from "../../hooks/use-item-detail-page";
import { repository } from "../../repository";
import { itemDetailPageStyle } from "../../style/item-detail-page.css";
import { createPriceString } from "../../util/price";
import { ShopItem } from "../../validator";

const mdParser = new Parser({ linkify: true });

type Props = {
  data: ShopItem;
};

const TopPage: VFC<Props> = (props) => {
  const {
    selectedImage,
    setSelectedImageIdx,
    isConfirmed,
    handleChangeConfirmCheckBox,
  } = useItemDetailPage(props.data.images);
  return (
    <Layout>
      <Head>
        <title>{`${props.data.name} | ${META_TAG_CONTENT.siteTitle}`}</title>
        <meta
          property="og:url"
          content={`${META_TAG_CONTENT.origin}/items/${props.data.id}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${props.data.name} | ${META_TAG_CONTENT.siteTitle}`}
        />
        <meta
          property="og:description"
          content={`${props.data.name} を買うなら ${META_TAG_CONTENT.siteTitle}！！sadnessOjisan の不用品を購入できるサイトです。`}
        />
        <meta property="og:site_name" content={META_TAG_CONTENT.siteTitle} />
        <meta
          property="og:image"
          content={`${props.data.images[0].image.url}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={META_TAG_CONTENT.twitterName} />
        <meta name="twitter:creator" content={META_TAG_CONTENT.twitterName} />
      </Head>

      <div className={itemDetailPageStyle.wrapper}>
        <h2 className={itemDetailPageStyle.title}>{props.data.name}</h2>
        <Tags
          tags={props.data.categories}
          className={itemDetailPageStyle.tags}
        />
        <div className={itemDetailPageStyle.selectedImageWrapper}>
          <img
            src={selectedImage.image.url}
            className={itemDetailPageStyle.selectedImage}
          />
        </div>

        <div className={itemDetailPageStyle.slider}>
          {props.data.images.map((image, idx) => (
            <div
              key={image.image.url}
              className={itemDetailPageStyle.imageWrapper}
            >
              <img
                className={itemDetailPageStyle.imageTile}
                src={image.image.url}
                onClick={() => setSelectedImageIdx(idx)}
              />
            </div>
          ))}
        </div>
        <div className={itemDetailPageStyle.info}>
          <span className={itemDetailPageStyle.statusBadge}>
            {props.data.status}
          </span>
          <span className={itemDetailPageStyle.price}>
            参考価格: {createPriceString(props.data.price)}
          </span>
        </div>
        <div className={itemDetailPageStyle.info}>
          <p className={itemDetailPageStyle.label}>商品説明</p>{" "}
          <div
            className={itemDetailPageStyle.description}
            dangerouslySetInnerHTML={{ __html: props.data.description }}
          ></div>
        </div>
        {props.data.status !== "売り切れ" && (
          <div className={itemDetailPageStyle.info}>
            <p className={itemDetailPageStyle.term}>
              申し込む前に
              <Link href="/about">
                <a
                  className={itemDetailPageStyle.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  このサイトについて
                </a>
              </Link>
              をご確認・ご同意ください。
            </p>
            <div className={itemDetailPageStyle.inputrow}>
              <input
                type="checkbox"
                id="confirm"
                onChange={handleChangeConfirmCheckBox}
                className={itemDetailPageStyle.input}
              />
              <label
                htmlFor="confirm"
                className={itemDetailPageStyle.inputrowLabel}
              >
                確認して、同意した
              </label>
            </div>
          </div>
        )}
        <div className={itemDetailPageStyle.info}>
          <span
            className={itemDetailPageStyle.applyLink}
            style={{
              pointerEvents:
                props.data.status === "売り切れ" || !isConfirmed
                  ? "none"
                  : "initial",
            }}
          >
            <button
              className={itemDetailPageStyle.applyButton}
              disabled={props.data.status === "売り切れ" || !isConfirmed}
              onClick={() => {
                alert(
                  "Twitter DM / Discord / Messenger などから僕に連絡を下さい。"
                );
              }}
            >
              申し込む
            </button>
          </span>
        </div>
      </div>
    </Layout>
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
  const itemId = context.params ? context.params["iid"] : undefined;
  if (typeof itemId !== "string") throw new Error("invalid path");
  const data = await repository.getItemById(itemId);
  const parsedDescription = mdParser.render(data.description);
  const sanitizedHtml = sanitizeHtml(parsedDescription);
  return {
    props: {
      data: { ...data, description: sanitizedHtml },
    },
  };
};

export default TopPage;
