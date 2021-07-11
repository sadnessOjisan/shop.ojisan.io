import { style } from "@vanilla-extract/css";

export const rootPageStyles = {
  wrapper: style({}),
  keyVisual: style({
    marginLeft: "-8px",
  }),
  itemLink: style({
    textDecoration: "none",
    color: "initial",
  }),
  itemListWrapper: style({
    marginBottom: "16px",
  }),
};
