import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { VFC } from "react";

import { Layout } from "../../components/layout";
import { Tags } from "../../components/tags";
import { useItemDetailPage } from "../../hooks/use-item-detail-page";
import { repository } from "../../repository";
import { itemDetailPageStyle } from "../../style/item-detail-page.css";
import { createPriceString } from "../../util/price";
import { ShopItem } from "../../validator";

type Props = {
  data: ShopItem;
};

const TopPage: VFC<Props> = (props) => {
  const { selectedImage, setSelectedImageIdx } = useItemDetailPage(
    props.data.images
  );
  return (
    <Layout>
      <div className={itemDetailPageStyle.wrapper}>
        <h2>{props.data.name}</h2>
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
          <span>{props.data.status}</span>
          <span className={itemDetailPageStyle.price}>
            {createPriceString(props.data.price)}
          </span>
        </div>
        <div>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className={itemDetailPageStyle.applyLink}
            style={{
              pointerEvents:
                props.data.status === "売り切れ" ? "none" : "initial",
            }}
          >
            <button
              className={itemDetailPageStyle.applyButton}
              disabled={props.data.status === "売り切れ"}
            >
              申し込む
            </button>
          </a>
        </div>

        <p className={itemDetailPageStyle.sideNote}>
          ※Google form からの申し込み以外にも Twitter DM
          からの申し込みも受け付けております。
        </p>
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
  return {
    props: {
      data,
    },
  };
};

export default TopPage;
