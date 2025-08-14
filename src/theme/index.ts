"use client";
import { createTheme } from "@mui/material/styles";
//
import { typography } from "./typography";
import { colors } from "./color";

const theme = createTheme({
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: colors.primary.main,
          borderColor: colors.primary.light,
          backgroundColor: colors.primary.light,
          "&:hover": {
            color: colors.white,
            background: colors.primary.main,
            borderColor: colors.primary.main,
          },
          "&.MuiButton-outlined.Mui-disabled": {
            background: colors.primary.light,
            color: colors.white,
            cursor: "not-allowed",
          },
        },
        contained: {
          color: colors.white,
          backgroundColor: colors.primary.main,
          "&:hover": {
            // background: colors.secondary.light, TODO: UPDATE COLOR ID NEEDED
          },
          "&.MuiButton-contained.Mui-disabled": {
            background: colors.primary.light,
            color: colors.white,
          },
        },
      },
    },
   
  },
});

export default theme;
