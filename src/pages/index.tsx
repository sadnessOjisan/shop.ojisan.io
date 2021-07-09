import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { VFC } from "react";

import { repository } from "../repository";
import { ShopItems } from "../validator";

type Props = {
  data: ShopItems;
};

const TopPage: VFC<Props> = (props) => {
  return (
    <div>
      {props.data.contents.map((d) => (
        <Link href={`/items/${d.id}`} key={d.id}>
          <a>
            <h2>{d.name}</h2>
            {d.images.map((image) => (
              <img key={image.image.url} src={image.image.url} />
            ))}
          </a>
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
