import { style } from "@vanilla-extract/css";

export const tagsStyle = {
  tips: style({ display: "flex" }),
  category: style({
    background: "lightgray",
    padding: "2px 8px",
    marginLeft: "4px",
    borderRadius: "4px",
    fontSize: 12,
    ":first-child": {
      marginLeft: 0,
    },
  }),
  link: style({
    color: "black",
    textDecoration: "none",
    ":visited": {
      color: "black",
    },
  }),
};
