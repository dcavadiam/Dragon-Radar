import Image from "next/image";
import { useQuery } from 'react-query';
import { fetchData } from "@/services/fetchApi";

export const HomePage = () => {
    const { data, isLoading, isError } = useQuery(['characters'], fetchData);

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error</h1>

    return (
        <div>
            <main className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold ">Dragon Radar</h1>
            </main>
            <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold m-4">All Characters</h2>
                <ul className="grid grid-cols-5 gap-8">
                    {
                        data?.items.map(item => (
                            <li key={item.id} className="flex flex-col items-center ">
                                <p className="text-xl">{item.name}</p>
                                <Image loader={() => item.image} src={item.image} alt={item.name} className="rounded-lg hover:scale-105 hover:duration-200" width={200} height={300} />

                            </li>
                        ))
                    }
                </ul>
            </div>
            <footer className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <p className="text-center text-gray-400">
                    Made with ❤️ by <a href="https://twitter.com/diego3code">dcavadiam</a>
                </p>
            </footer>
        </div>
    )
}