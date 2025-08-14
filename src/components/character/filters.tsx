"use client";
import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
//
import { useQueryParams } from "@/src/hooks";
import { useDebounce } from "@/src/hooks/useDebounce";
import { sortOptions, statusOptions } from "@/src/constants";

export default function CharacterFilters() {
  const { getQueryParams, setQueryParams, setMultipleQueryParams } =
    useQueryParams();

  const q = getQueryParams("name") || "";
  const status = getQueryParams("status") || "";
  const sort = getQueryParams("sort") || "";

  const [searchTerm, setSearchTerm] = useState(q);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  // Sync state when query changes
  useEffect(() => {
    setSearchTerm(q);
  }, [q]);

  // Update query param when debounced search term changes
  useEffect(() => {
    setMultipleQueryParams({
      name: debouncedSearchTerm,
      page: "1",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);
  console.log({ debouncedSearchTerm });

  return (
    <Box display="flex" gap={2} mb={3} flexWrap="wrap">
      {/* Search */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        size="small"
      />

      {/* Status Filter */}
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          onChange={(e) => {
            setMultipleQueryParams({
              status: e.target.value,
              page: "1",
            });
          }}
          label="Status"
        >
          <MenuItem value="">All</MenuItem>
          {statusOptions.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt?.toLocaleUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Sort */}
      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel>Sort</InputLabel>
        <Select
          value={sort}
          onChange={(e) => {
            setQueryParams("sort", e.target.value);
          }}
          label="Sort"
        >
          {sortOptions.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
