import { style } from "@vanilla-extract/css";

export const layoutStyles = {
  childrenWrapper: style({
    marginTop: 62,
    minHeight: "calc(100vh - 62px - 200px)",
    "@media": {
      "screen and (min-width: 768px)": {
        maxWidth: 1080,
        marginRight: "auto",
        marginLeft: "auto",
      },
    },
  }),
};
