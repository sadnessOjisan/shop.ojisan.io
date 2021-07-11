import { VFC } from "react";

import { statusTipStyles } from "../style/status-tip.css";

export const StatusTip: VFC<{
  status: "販売中" | "商談中" | "売り切れ";
  className: string;
}> = (props) => (
  <div
    className={`${props.className} ${statusTipStyles.wrapper} ${
      props.status === "販売中"
        ? statusTipStyles.ok
        : props.status === "商談中"
        ? statusTipStyles.wip
        : statusTipStyles.reject
    }`}
  >
    {props.status}
  </div>
);
