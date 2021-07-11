import { FC } from "react";
import { Header } from "./header";

export const Layout: FC = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
