import { VFC } from "react";
import { tagsStyle } from "../style/tags.css";

type Props = { tags: { id: string; name: string }[]; className?: string };
export const Tags: VFC<Props> = (props) => {
  return (
    <span className={`${props.className} ${tagsStyle.tips}`}>
      {props.tags.map((c) => (
        <div key={c.id} className={tagsStyle.category}>
          {c.name}
        </div>
      ))}
    </span>
  );
};
