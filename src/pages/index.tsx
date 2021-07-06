import { GetStaticProps } from "next";
import { VFC } from "react";

import { repository } from "../repository";

type Props = {
  data: any;
};

const TopPage: VFC<Props> = (props) => {
  return <div>hello top page | {JSON.stringify(props)}</div>;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data = await repository.getAllItems();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default TopPage;
