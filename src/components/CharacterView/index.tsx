import Image from "next/image"
import { Character } from "@/types"


interface CharacterViewProps {
    character: Character
}

export const CharacterView = ({ character }: CharacterViewProps) => {

    const { name, image, ki, maxKi, race, gender, description, affiliation, } = character

    return (
        <main className="flex flex-col items-center my-8">
            
            <article className="flex items-center gap-0 w-full max-w-[1000px] ">
                <div className="flex flex-col w-2/5 gap-4">
                    <Image unoptimized priority loader={() => image} src={image} alt={name} width={220} height={475} className="w-[220px] h-[475px] object-contain drop-shadow-custom mx-auto" />
                </div>
                <div className="flex flex-col w-3/5">
                    <h1 className="font-permanentMarker text-6xl -rotate-3 my-4">{name}</h1>
                    <span> <span className="font-semibold">Race:</span> {race}</span>
                    <span> <span className="font-semibold">Gender:</span> {gender}</span>
                    <span> <span className="font-semibold">Affiliation:</span> {affiliation}</span>
                    <span> <span className="font-semibold">Ki:</span> {ki}</span>
                    <span> <span className="font-semibold">Max Ki:</span> {maxKi}</span>
                    <p className="text-justify">{description}</p>
                </div>
            </article>
        </main>
    )

} 