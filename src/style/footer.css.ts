import { style } from "@vanilla-extract/css";

export const footerStyle = {
  wrapper: style({
    padding: "8px 12px",
    background: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "self-start",
    justifyContent: "space-evenly",
    fontSize: 12,
    minHeight: 200,
  }),
  title: style({
    fontWeight: "bold",
    fontSize: "16px",
  }),
  link: style({
    color: "white",
    textDecoration: "underline",
    ":visited": {
      color: "white",
    },
  }),
};
