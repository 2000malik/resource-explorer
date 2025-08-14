"use client";
import React from "react";
import { useGetCharacters, useQueryParams } from "@/src/hooks";
import { Box, Container, Grid, Stack } from "@mui/material";
import {
  CharacterCard,
  FallBack,
  LoadingSkeleton,
  PaginationControls,
  Typography,
} from "@/src/components";
import { colors } from "@/src/theme/color";
import CharacterFilters from "@/src/components/character/filters";
import { sortCharacters } from "@/src/utils";

export const Characters: React.FC = () => {
  const { getQueryParams } = useQueryParams();
  const page = getQueryParams("page") || "";
  const name = getQueryParams("name") || "";
  const gender = getQueryParams("gender") || "";
  const sort = getQueryParams("sort") || "";
  const status = getQueryParams("status") || "";

  const { fetchCharacters } = useGetCharacters();
  const {
    data: charactersData,
    isLoading,
    error,
    isError,
  } = fetchCharacters({ page, name, gender, status });
  const noResults =
    !isLoading && charactersData?.results?.length === 0 && !error && !isError;
  let sortedResults = charactersData?.results || [];

  if (sort) {
    sortedResults = sortCharacters(sortedResults, sort);
  }
  return (
    <Container sx={{ marginBlock: 4 }}>
      <Stack gap={5}>
        <Typography
          sx={{ textAlign: "center" }}
          variant="3xl"
          color={colors.black.main}
        >
          Resource Explorer
        </Typography>
        <CharacterFilters />
        <Container>
          {isLoading && <LoadingSkeleton />}
          <Grid container spacing={2}>
            {noResults ? (
              <FallBack />
            ) : (
              <Grid container spacing={2}>
                {sortedResults?.map?.((char) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={char.id}>
                    <CharacterCard character={char} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Container>
        {charactersData?.results && charactersData.results.length > 0 && (
          <PaginationControls
            totalPages={charactersData.info.pages || 1}
            currentPage={Number(page)}
          />
        )}
      </Stack>
    </Container>
  );
};
