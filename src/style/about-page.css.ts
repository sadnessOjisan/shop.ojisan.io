import { style } from "@vanilla-extract/css";

export const aboutPageStyles = {
  wrapper: style({
    padding: 8,
  }),
  midashi: style({ margin: "32px 0px", fontSize: 20 }),
  text: style({
    margin: "16px 0px",
    fontSize: 16,
    fontFamily: "initial",
    lineHeight: 1.6,
  }),
  link: style({
    color: "navy",
    textDecoration: "underline",
    ":visited": {
      color: "navy",
    },
  }),
};
