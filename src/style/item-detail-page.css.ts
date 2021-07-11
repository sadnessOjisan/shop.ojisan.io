import { style } from "@vanilla-extract/css";

export const itemDetailPageStyle = {
  wrapper: style({ padding: 12, color: "#0e0e0e" }),
  title: style({ fontSize: 24 }),
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
  statusBadge: style({ fontSize: 12 }),
  info: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "32px 0px",
  }),
  term: style({ fontSize: 12 }),
  label: style({
    fontSize: 12,
    textAlign: "left",
    width: "100%",
    color: "darkgray",
  }),
  description: style({
    fontSize: 14,
    textAlign: "left",
    width: "100%",
    marginTop: 8,
  }),
  sideNote: style({ fontSize: 12, color: "gray" }),
  link: style({
    fontWeight: "bold",
    textDecoration: "underline",
    ":visited": {
      color: "initial",
    },
  }),
  inputrow: style({
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    fontSize: 12,
  }),
};
