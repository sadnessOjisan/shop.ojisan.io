import { GetStaticProps } from "next";
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
     <img src={props.data.image.url}></img>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const itemId = context.params['iid']
    if(typeof itemId !== 'string')throw new Error('invalid path')
  const data = await repository.getItemById(itemId);
  return {
    props: {
      data,
    },
  };
};

export default TopPage;
