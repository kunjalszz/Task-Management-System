import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    p: {
      50: "#DCF2F1",
      100: "#7FC7D9",
      200: "#365486",
      300: "#0F1035",
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "Poppins, sans-serif",
        bg: "p.50",
        color: "p.300",
    
      },
    },
  },
});

export default theme;
