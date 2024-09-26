'use client';

import Image from "next/image";
import { useQuery } from 'react-query';
import { fetchData } from "@/services/fetchApi";
import { useState } from "react";
import { Item, Meta } from "@/lib/definitions";
import { Pagination } from "@/lib/components/pagination";

export default function Home() {

  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(['characters', page], () => fetchData(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error</h1>

  const {
    totalPages,
    currentPage,
  }: Meta | undefined = data?.meta;

  const handleClickCharacter = (id: number) => {
    window.location.href = `/character/${id}`
  }

  const handleNextPage = (): void => {
    setPage(page + 1);
    console.log(page);
  }
  const handlePreviousPage = (): void => {
    setPage(page - 1);
    console.log(page);
  }

  const handleFirstPage = (): void => {
    setPage(1);
  }
  const handleLastPage = (): void => {
    setPage(totalPages);
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
                <Image onClick={() => handleClickCharacter(item.id)} loader={() => item.image} src={item.image} alt={item.name} className="w-[200px] h-[300px] rounded-lg hover:scale-105 hover:duration-200 object-contain" width={200} height={300} />
                <p className="text-xl">{item.name}</p>

              </li>
            ))
          }
        </ul>
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        handleNextPage={handleNextPage} 
        handlePreviousPage={handlePreviousPage} 
        handleFirstPage={handleFirstPage} 
        handleLastPage={handleLastPage}
      />
      <footer className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">
          Made with ❤️ by <a href="https://github.com/dcavadiam" target="_blank">dcavadiam</a>
        </p>
      </footer>
    </div>
  )
}

