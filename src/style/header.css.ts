import { style } from "@vanilla-extract/css";

export const headerStyle = {
  wrapper: style({
    padding: "8px 12px",
    height: "40px",
    background: "white",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px -7px 11px 5px black;",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
  }),
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
