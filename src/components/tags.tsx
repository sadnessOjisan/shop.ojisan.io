import Link from "next/link";
import { VFC } from "react";

import { tagsStyle } from "../style/tags.css";

type Props = { tags: { id: string; name: string }[]; className?: string };
export const Tags: VFC<Props> = (props) => {
  return (
    <span className={`${props.className} ${tagsStyle.tips}`}>
      {props.tags.map((c) => (
        <Link key={c.id} href={`/tags/${c.id}`}>
          <a className={tagsStyle.link}>
            <div className={tagsStyle.category}>{c.name}</div>
          </a>
        </Link>
      ))}
    </span>
  );
};
