import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    xxxl: React.CSSProperties;
    xxl: React.CSSProperties;
    xl: React.CSSProperties;
    lg: React.CSSProperties;
    md: React.CSSProperties;
    sm: React.CSSProperties;
    xs: React.CSSProperties;
    xxs: React.CSSProperties;
    "2xl": React.CSSProperties;
    "1xl": React.CSSProperties;
    "3xl": React.CSSProperties;
    "4xl": React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    xxxl?: React.CSSProperties;
    xxl?: React.CSSProperties;
    xl?: React.CSSProperties;
    lg?: React.CSSProperties;
    md?: React.CSSProperties;
    sm?: React.CSSProperties;
    xs?: React.CSSProperties;
    xxs?: React.CSSProperties;
    "1xl"?: React.CSSProperties;
    "2xl"?: React.CSSProperties;
    "3xl"?: React.CSSProperties;
    "4xl"?: React.CSSProperties;
  }
}

// Update the Typography's prop types to include the new variants
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    xxxl: true;
    xxl: true;
    xl: true;
    lg: true;
    md: true;
    sm: true;
    xs: true;
    xxs: true;
    "1xl": true;
    "2xl": true;
    "3xl": true;
    "4xl": true;
  }
}
