'use client';
import { getEndpoint } from "@/libs/endpoints";
import { Character } from "@/types";
import { useEffect, useState } from "react";

export const useFetchCharacters = ({ searchType }: { searchType: string }) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const ALL_CHARACTERS_URL = getEndpoint({ endpoint: searchType });

    const fetchCharacters = async () => {
        try {
            const response = await fetch(ALL_CHARACTERS_URL);
            const data = await response.json();
            const characters = data.items;
            setCharacters(characters);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return { characters, loading, error };
}