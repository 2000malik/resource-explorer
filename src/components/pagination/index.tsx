import React from "react";
import { Pagination, Box } from "@mui/material";
import { useRouter } from "next/router";

interface PaginationControlsProps {
  totalPages?: number | null;
  currentPage?: number | null;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages = 1,
  currentPage = 1,
}) => {
  const router = useRouter();

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    router.push({ pathname: "/", query: { ...router.query, page } });
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
