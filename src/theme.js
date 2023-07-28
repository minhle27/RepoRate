import { Platform } from "react-native";

const theme = {
  roundness: 3,
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    languageBox: "#8c72db",
    primary: "#0366d6",
    appBarBackground: "#12b3db",
    mainBackground: "#dfeaed",
    error: "#d73a4a",
    divider: "#d1d5da",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
