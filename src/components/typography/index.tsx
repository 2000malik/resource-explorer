/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";

type Props = TypographyProps & {
  children?: React.ReactNode;
  noOfLines?: number;
  typography?: {};
};

export const Typography: React.FC<Props> = ({
  noOfLines,
  children,
  typography,
  ...resProps
}) => {
  return (
    <MuiTypography
      variant="lg"
      sx={{
        display: noOfLines ? "-webkit-box" : "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitLineClamp: noOfLines,
        WebkitBoxOrient: "vertical",
        typography: typography,
      }}
      {...resProps}
    >
      {children}
    </MuiTypography>
  );
};
