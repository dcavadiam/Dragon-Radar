import Image from "next/image";

export const Loading = () => {
    return <main className="flex flex-col justify-center items-center min-h-screen">
        <Image src="/dragon-ball-with-4-stars.webp" alt="dragon ball with 4 stars" width={50} height={50} className="aspect-auto animate-spin" />
        <h2>Cargando...</h2>
    </main>;
}