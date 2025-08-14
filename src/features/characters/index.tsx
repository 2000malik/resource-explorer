"use client";
import React from "react";
import { useGetCharacters, useQueryParams } from "@/src/hooks";

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

  return <div>character</div>;
};
