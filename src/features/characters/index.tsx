"use client";
import { useGetCharacters } from "@/src/hooks";
import React from "react";

export const Characters: React.FC = () => {
  const { fetchCharacters } = useGetCharacters();
  const {
    data: charactersData,
    isLoading,
    error,
    isError,
  } = fetchCharacters({});
  console.log({ charactersData });
  return <div>character</div>;
};
