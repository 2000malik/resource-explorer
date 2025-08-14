import React from "react";
import { Pagination, Box } from "@mui/material";
//
import { useQueryParams } from "@/src/hooks";

interface PaginationControlsProps {
  totalPages?: number | null;
  currentPage?: number | null;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages = 1,
  currentPage = 1,
}) => {
  const { setQueryParams } = useQueryParams();
  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setQueryParams("page", page.toString());
  };

  if (!totalPages || totalPages <= 1) return null;

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Pagination
        count={totalPages}
        page={Number(currentPage)}
        onChange={handleChange}
        color="primary"
      />
    </Box>
  );
};
