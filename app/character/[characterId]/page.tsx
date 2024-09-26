'use client';

import { useQuery } from "react-query";
import { fetchCharacter } from "@/services/fetchApi";
import { Item } from "@/lib/definitions";
import Image from "next/image";
// import { redirect } from "next/navigation";

export default function Page({ params }: { params: { characterId: string } }) {

    const { data, isLoading, isError } = useQuery<Item>(['character', params.characterId], () => fetchCharacter(parseInt(params.characterId)));

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error</h1>

    const handleClick = () => {
        window.location.href = '/'
    }

    return (
        <div className=" flex justify-center flex-col w-full max-w-3xl mx-auto h-screen">
            <div className=" flex flex-row items-center justify-center">
                <Image loader={() => data?.image ?? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fitsuruguay.com%2Fimg-cloudflarebr-com-gbg-1-20-959-png-16905189.html&psig=AOvVaw0fZdpufXPs3klo_TPx3tJh&ust=1727219956648000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIj0iPWZ2ogDFQAAAAAdAAAAABAE"} src={data?.image ?? ''} alt={data?.name ?? 'Character'} className="rounded-lg hover:scale-105 hover:duration-200" width={200} height={300} />
                <div className="flex flex-col justify-start prose prose-invert">
                    <h1 className="text-2xl font-bold">{data?.name}</h1>
                    <p className="text-xl">{data?.description}</p>
                </div>
            </div>
            <button onClick={handleClick} >Go to Characters</button>
        </div>
    );
}