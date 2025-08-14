import React from "react";
import {
  ButtonProps,
  CircularProgress,
  Button as MUIButton,
} from "@mui/material";
//
import { colors } from "@/src/theme/color";

type Props = {
  children: React.ReactNode;
  loading?: boolean;
} & ButtonProps;

export const Button: React.FC<Props> = ({
  loading,
  children,
  variant = "contained",
  sx,
  ...resProps
}) => {
  return (
    <MUIButton
      variant={variant}
      disableElevation
      fullWidth
      sx={{
        height: 42,
        fontSize: 14,
        textTransform: "capitalize",
        fontWeight: 600,
        borderRadius: "30px",
        minWidth: "fit-content",
        ...sx,
      }}
      {...resProps}
    >
      {loading ? (
        <CircularProgress size={20} sx={{ color: colors.white }} />
      ) : (
        children
      )}
    </MUIButton>
  );
};
