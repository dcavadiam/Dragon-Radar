import { Characters, Item } from "@/lib/definitions";
import axios from "axios";

export const fetchData = async (page: number): Promise<Characters> => {
  const response = await axios.get(
    `https://dragonball-api.com/api/characters?page=${page}&limit=10`
  );
  return response.data;
};

export const fetchCharacter = async (id: number): Promise<Item> => {
  const response = await axios.get(
    `https://dragonball-api.com/api/characters/${id}`
  );
  return response.data;
};
