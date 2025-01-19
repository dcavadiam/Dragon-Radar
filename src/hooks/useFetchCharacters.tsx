'use client';

import { Character } from "@/types";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_VERCEL_URL;

interface FetchCharactersProps {
    searchType: string;
    id?: string;
}

export const useFetchCharacters = ({ searchType, id }: FetchCharactersProps) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [characterByID, setCharacterByID] = useState<Character | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchByEndPoint = async () => {
        switch (searchType) {
            case 'ALL_CHARACTERS':
                return await fetch(`${API}/api/characters`);
            case 'CHARACTER':
                return await fetch(`${API}/api/characters/${id}`);
            default:
                return await fetch(`${API}/api/characters`);
        }
    }

    const fetchCharacters = async () => {
        try {
            setLoading(true);
            const response = await fetchByEndPoint();
            const data = await response.json();
            if (searchType === 'CHARACTER') {
                setCharacterByID(data);
            } else {
                setCharacters(data.items);
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError((error as Error).message);
        }
    }


    useEffect(() => {
        fetchCharacters();
    }, []);

    return { characters, characterByID, loading, error };
}