"use client";
import axios from "axios";
import { BASE_URL } from "@/src/constants";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useGetCharacters = () => {
  // Get all Characters
  const getAllCharacters = async ({
    page = "1",
    name = "",
    gender = "",
    species = "",
    type = "",
    status = "",
  }: CharacterQueryProps = {}): Promise<CharacterQueryResponseType> => {
    const queryParameters: string[] = [
      `page=${page}`,
      status && `status=${status}`,
      name && `name=${name}`,
      gender && `gender=${gender}`,
      species && `species=${species}`,
      type && `type=${type}`,
    ].filter(Boolean);
    const queryString = queryParameters.join("&");
    try {
      const res = await axios.get(`${BASE_URL}/character?${queryString}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      toast.error("Failed to fetch characters");
      throw new Error("Failed to fetch characters");
    }
  };
  const fetchCharacters = ({
    page = "1",
    name,
    gender,
    type,
    status,
    species,
  }: CharacterQueryProps) => {
    return useQuery<CharacterQueryResponseType>({
      queryKey: ["allCharacters", page, name, gender, type, status, species],
      queryFn: async () =>
        getAllCharacters({ page, name, gender, type, status, species }),
    });
  };

  //  get single character

  const getSingleCharacter = async ({
    id,
  }: {
    id: string;
  }): Promise<CharacterType> => {
    try {
      const res = await axios.get(`${BASE_URL}/character/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      toast.error("Failed to fetch character details");
      throw new Error("Failed to fetch character details");
    }
  };
  const useCharacterDetails = (id: string) => {
    return useQuery<CharacterType>({
      queryKey: ["username", id],
      queryFn: async () => getSingleCharacter({ id }),
      enabled: !!id,
    });
  };

  return { fetchCharacters, useCharacterDetails };
};
