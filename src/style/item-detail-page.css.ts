import { style } from "@vanilla-extract/css";

export const itemDetailPageStyle = {
  wrapper: style({ padding: 12 }),
  tags: style({
    margin: "12px 0px",
  }),
  selectedImageWrapper: style({
    display: "flex",
    justifyContent: "center",
    marginBottom: 12,
  }),
  selectedImage: style({
    width: "300px",
  }),
  slider: style({
    display: "flex",
    flexWrap: "wrap",
    width: 240,
    margin: "auto",
  }),
  imageTile: style({ width: 80, height: 80 }),
  imageWrapper: style({}),
  applyButton: style({
    width: "200px",
    height: "40px",
    background: "black",
    color: "white",
    outline: "none",
    border: "solid 1px black",
    ":focus": {
      border: "solid 1px orange",
    },
    ":disabled": {
      background: "lightgray",
      color: "white",
      border: "none",
    },
  }),
  price: style({ fontSize: 24 }),
  applyLink: style({
    outline: "none",
    display: "block",
    textAlign: "center",
    margin: "12px 0px",
  }),
  info: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "32px 0px",
  }),
  sideNote: style({ fontSize: 12, color: "gray" }),
};
