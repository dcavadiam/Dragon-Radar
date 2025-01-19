'use client';
import { useFetchCharacters } from "@/hooks/useFetchCharacters";
import { Loading } from "@/components/Loading";
import { CharacterCard } from "@/components/Cards/CharacterCard";


function Characters() {
    const { characters, loading, error } = useFetchCharacters({ searchType: 'ALL_CHARACTERS' });

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <h1>{error}</h1>;
    }
    return (
        <main className="flex flex-wrap justify-center items-center min-h-screen py-[4rem]">
            {
                characters.map((character) => (
                   <CharacterCard key={character.id} character={character} />
                ))
            }
        </main>
    );
}

export default Characters;