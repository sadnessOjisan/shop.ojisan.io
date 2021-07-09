import { GetStaticProps } from "next";
import { VFC } from "react";

import { repository } from "../repository";
import { ShopItems } from "../validator";

type Props = {
  data: ShopItems;
};

const TopPage: VFC<Props> = (props) => {
  return <div>
    {props.data.contents.map(d => <div key={d.id}>
      <h2>{d.name}</h2>
      <img src={d.image.url} />
    </div>)}
  </div>;
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
