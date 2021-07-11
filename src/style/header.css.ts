import { style } from "@vanilla-extract/css";

export const headerStyle = {
  wrapper: style({ padding: "8px 12px", height: "40px", background: "white" }),
  title: style({
    fontWeight: "bold",
    fontSize: "16px",
  }),
  link: style({
    textDecoration: "none",
    ":visited": {
      color: "initial",
    },
  }),
};
