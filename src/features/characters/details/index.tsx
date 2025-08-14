"use client";
import React from "react";
import { useGetCharacters } from "@/src/hooks";
import { Alert, Container, Skeleton } from "@mui/material";
import CharacterDetail from "./caharacter-details";

type Props = {
  id: string;
};

export const CharacterDetails: React.FC<Props> = ({ id }) => {
  const { useCharacterDetails } = useGetCharacters();
  const { data, isLoading, error, isError, refetch } = useCharacterDetails(id);
  console.log({ data });
  return (
    <Container sx={{ mt: 4 }}>
      {isLoading && <Skeleton variant="rectangular" height={400} />}
      {isError && (
        <Alert
          severity="error"
          onClick={() => refetch()}
          sx={{ cursor: "pointer" }}
        >
          Failed to load character. Click to retry.
        </Alert>
      )}
      {data && (
        <>
          <CharacterDetail character={data} />
          {/* <NotesForm characterId={data.id} /> */}
        </>
      )}
    </Container>
  );
};
