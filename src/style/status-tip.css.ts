import { style } from "@vanilla-extract/css";

export const statusTipStyles = {
  wrapper: style({
    padding: "2px",
    borderRadius: "4px",
    maxWidth: 60,
    textAlign: "center",
    color: "white",
    fontSize: 10,
  }),
  ok: style({ background: "#279727" }),
  wip: style({ background: "#FFD351", color: "#59431C" }),
  reject: style({ background: "#ff4958" }),
};
