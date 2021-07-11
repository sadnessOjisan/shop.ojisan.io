import { style } from "@vanilla-extract/css";

export const itemListItemStyles = {
  wrapper: style({ display: "flex", height: "120px", alignItems: "center" }),
  image: style({ width: "160px", height: "90px", objectFit: "contain" }),
  infoBox: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "12px",
  }),
  infoBoxItem: style({
    marginBottom: "8px",
  }),
  title: style({
    fontWeight: "bold",
  }),
  tips: style({ display: "flex" }),
  category: style({
    background: "lightgray",
    padding: "2px 8px",
    marginLeft: "4px",
    borderRadius: "4px",
  }),
};
