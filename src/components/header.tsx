import { headerStyle } from "../style/header.css";

export const Header = () => {
  return (
    <header className={headerStyle.wrapper}>
      <span className={headerStyle.title}>shop.ojisan.io</span>
    </header>
  );
};
