import { FC } from "react";
import { layoutStyles } from "../style/layout.css";

import { Header } from "./header";

export const Layout: FC = (props) => {
  return (
    <div>
      <Header />
      <div className={layoutStyles.childrenWrapper}>{props.children}</div>
    </div>
  );
};
