import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const customBreakpointValues = {
  values: {
    xs: 0,
    sm: 600,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};

const breakpoints = createBreakpoints({ ...customBreakpointValues });

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    include: { [key: string]: any };
    design: {
      font: { [key: string]: any };
      colors: { [key: string]: string };
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    include?: { [key: string]: any };
    design?: {
      font?: { [key: string]: any };
      colors?: { [key: string]: string };
    };
  }
}

export default createTheme({
  include: {
    "@keyframes gradient": {
      from: { width: 0 },
      to: { width: "100%" },
    },
    title: {
      fontWeight: 600,
      letterSpacing: "2px",
    },
    subTitle: {
      fontWeight: 500,
    },
    styles: {
      maxWidth: 1294,
    }
  },
  breakpoints,
  typography: {
    fontFamily: "poppins",
    fontSize: 14,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    fontWeightBold: 800,
  },
  spacing: (factor) => `${8 * factor}px`,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 10,
        padding: "16px 20px !important",
        textTransform: "initial",
        fontSize: 13,
        transition: "background-color 200ms ease-in-out 0s",
      },
    },
  },
  design: {
    colors: {
      white: "#FFFFFF",
      black: "#040415",
      grey: "#008E8A",
      lightGrey: "#6f6f6f",
    },
  },
});
