'use client';
import { CharacterView } from "@/components/CharacterView";
import { Loading } from "@/components/Loading";
import { useFetchCharacters } from "@/hooks/useFetchCharacters";
import { useParams } from "next/navigation"

export default function CharacterPage() {
    const { id } = useParams<{ id: string }>();

    const { characterByID, loading, error } = useFetchCharacters({ searchType: 'CHARACTER', id });

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <CharacterView character={characterByID!} />
        </div>
    )
}