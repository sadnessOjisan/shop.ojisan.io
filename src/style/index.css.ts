import { style } from "@vanilla-extract/css";

export const rootPageStyles = {
  wrapper: style({}),
  itemLink: style({
    textDecoration: "none",
    ":visited": {
      color: "initial",
    },
  }),
  itemListWrapper: style({
    marginBottom: "16px",
  }),
};
