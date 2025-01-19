import { Character } from "@/types"
import Image from "next/image"

interface CharacterCardProps {
    character: Character
}

export const CharacterCard = ({ character }: CharacterCardProps) => {

    const { id, name, race, image } = character
    return (
        <div key={id} className="flex flex-col items-center relative w-[250px] duration-300 hover:scale-105 cursor-pointer">
            <picture>
                <Image loader={() => image} src={image} alt={name} width={150} height={100} className="w-[220px] h-[350px] object-contain drop-shadow-custom mask-gradient " />
            </picture>
            <div className="absolute bottom-1/4 text-center font-permanentMarker -rotate-3">
                <h2 className="text-6xl drop-shadow-custom">{name}</h2>
                <p className="text-xl drop-shadow-custom">{race}</p>
            </div>
        </div>
    )
}