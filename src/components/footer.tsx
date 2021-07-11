import Link from "next/link";
import { VFC } from "react";
import { footerStyle } from "../style/footer.css";

export const Footer: VFC = () => (
  <div className={footerStyle.wrapper}>
    <Link href="/about">
      <a className={footerStyle.link}>このサイトについて</a>
    </Link>
    <p>
      created by{" "}
      <a href="https://twitter.com/sadnessOjisan" className={footerStyle.link}>
        @sadnessOjisan
      </a>
    </p>
    <p>This site use cookie for Google Analysis</p>
    <p>
      Source code is&nbsp;
      <a
        href="https://github.com/sadnessOjisan/shop.ojisan.io"
        className={footerStyle.link}
      >
        here
      </a>
    </p>
  </div>
);
