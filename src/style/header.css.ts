import { style } from "@vanilla-extract/css";

export const headerStyle = {
  wrapper: style({
    padding: "8px 12px",
    height: 62,
    background: "white",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px -7px 11px 5px black;",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    fontStyle: "italic",
  }),
  innerWrapper: style({
    "@media": {
      "screen and (min-width: 768px)": {
        width: "100%",
        maxWidth: 1080,
        marginRight: "auto",
        marginLeft: "auto",
      },
    },
  }),
  title: style({
    fontWeight: "bold",
    fontSize: 18,
    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: 24,
      },
    },
  }),
  link: style({
    textDecoration: "none",
    ":visited": {
      color: "initial",
    },
  }),
};
