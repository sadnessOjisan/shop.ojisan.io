import { style } from "@vanilla-extract/css";

export const rootPageStyles = {
  wrapper: style({}),
  keyVisual: style({ width: "100%" }),
  itemLink: style({
    textDecoration: "none",
    color: "initial",
  }),
  itemListWrapper: style({
    marginBottom: "16px",
  }),
  title: style({
    fontSize: "20px",
    textAlign: "center",
    margin: 16,
  }),
  items: style({ padding: "0px 8px 8px 8px" }),
};
