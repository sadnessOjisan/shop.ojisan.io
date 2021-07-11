import { style } from "@vanilla-extract/css";

export const layoutStyles = {
  childrenWrapper: style({
    marginTop: 62,
    "@media": {
      "screen and (min-width: 768px)": {
        maxWidth: 1080,
        marginRight: "auto",
        marginLeft: "auto",
      },
    },
  }),
};
