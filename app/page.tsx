'use client';

import Image from "next/image";
import { useQuery } from 'react-query';
import { fetchData } from "@/services/fetchApi";
import { ChevronLeft, ChevronRight } from "@/lib/icons/arrows";
import { useState } from "react";

export default function Home() {

  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(['characters', page], () => fetchData(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error</h1>

  const handleClickCharacter = (id: number) => {
    window.location.href = `/character/${id}`
  }

  const handleNextPage = () => {
    setPage(page + 1);
    console.log(page);
  }
  const handlePreviousPage = () => {
    setPage(page - 1);
    console.log(page);
  }

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
                <Image onClick={() => handleClickCharacter(item.id)} loader={() => item.image} src={item.image} alt={item.name} className="rounded-lg hover:scale-105 hover:duration-200" width={200} height={300} />

              </li>
            ))
          }
        </ul>
      </div>
      <div className="flex justify-center items-center w-full gap-3">
       
        <span className="px-4 py-2 bg-gray-800 rounded-lg cursor-pointer" onClick={handlePreviousPage}>
          <ChevronLeft />
        </span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg ">Pagina {data?.meta.currentPage}</span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg cursor-pointer" onClick={handleNextPage}>
          <ChevronRight />
        </span>
        
      </div>
      <footer className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">
          Made with ❤️ by <a href="https://github.com/dcavadiam" target="_blank">dcavadiam</a>
        </p>
      </footer>
    </div>
  )
}
