import { FC } from "react";

import { layoutStyles } from "../style/layout.css";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout: FC = (props) => {
  return (
    <div>
      <Header />
      <div className={layoutStyles.childrenWrapper}>{props.children}</div>
      <Footer />
    </div>
  );
};
