"use client";
import { useGetCharacters } from "@/src/hooks";
import React from "react";

export const Characters: React.FC = () => {
  const { fetchCharacters, useCharacterDetails } = useGetCharacters();
  const {
    data: charactersData,
    isLoading,
    error,
    isError,
  } = fetchCharacters({});
  const {
    data,
    // isLoading,
    // error,
    // isError,
  } = useCharacterDetails("2");
  console.log({ data });
  return <div>character</div>;
};
