"use client";
import React from "react";
import { useGetCharacters } from "@/src/hooks";

type Props = {
  id: string;
};

export const CharacterDetails: React.FC<Props> = ({ id }) => {
  const { useCharacterDetails } = useGetCharacters();
  const {
    data,
    // isLoading,
    // error,
    // isError,
  } = useCharacterDetails(id);
  console.log({ data });
  return <div>{id}</div>;
};
