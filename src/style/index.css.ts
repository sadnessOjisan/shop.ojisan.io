import { style } from "@vanilla-extract/css";

export const rootPageStyles = {
  wrapper: style({}),
  keyVisual: style({
    width: "100%",
    "@media": {
      "screen and (min-width: 768px)": {
        padding: "0px 160px",
        background: "#ffffff",
        marginTop: 24,
        height: 320,
        objectFit: "cover",
      },
    },
  }),
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
