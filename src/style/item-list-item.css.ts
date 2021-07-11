import { style } from "@vanilla-extract/css";

export const itemListItemStyles = {
  wrapper: style({ display: "flex", height: "144px", alignItems: "center" }),
  image: style({ width: "120px", height: "120px", objectFit: "contain" }),
  infoBox: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "12px",
  }),
  infoBoxItem: style({
    marginBottom: "8px",
    fontSize: 12,
  }),
  title: style({
    fontWeight: "bold",
    fontSize: 12,
  }),
  tips: style({ display: "flex" }),
  category: style({
    background: "lightgray",
    padding: "2px 8px",
    marginLeft: "4px",
    borderRadius: "4px",
  }),
};
