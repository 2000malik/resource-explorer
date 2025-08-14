"use client";
import React from "react";
import { useGetCharacters, useQueryParams } from "@/src/hooks";
import { Box, Container, Grid, Stack } from "@mui/material";
import { CharacterCard, LoadingSkeleton, Typography } from "@/src/components";
import { colors } from "@/src/theme/color";

export const Characters: React.FC = () => {
  const { getQueryParams } = useQueryParams();
  const page = getQueryParams("page") || "";
  const name = getQueryParams("name") || "";
  const gender = getQueryParams("gender") || "";
  const type = getQueryParams("type") || "";
  const status = getQueryParams("status") || "";
  const species = getQueryParams("species") || "";

  const { fetchCharacters } = useGetCharacters();
  const {
    data: charactersData,
    isLoading,
    error,
    isError,
  } = fetchCharacters({ page, name, gender, type, status, species });

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
        <Container>
          {isLoading && <LoadingSkeleton />}
          <Grid container spacing={2}>
            {charactersData?.results?.map?.((char) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={char.id}>
                <CharacterCard character={char} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Container>
  );
};
