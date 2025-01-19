import Image from "next/image";

const PAGES = [
  {
    title: "Characters",
    description: "Search all of the Dragon Ball characters and more!",
    url: "/characters",
  },
  {
    title: "Planets",
    description: "Search all of the Dragon Ball characters and more!",
    url: "/planets",
  }
]

export default function Home() {
  return (
    <>
      <main className="my-6 flex flex-col items-center py-2 min-h-screen">
        <section className="flex flex-row items-center justify-center w-full">
          <Image priority src="/dragon-radar-logo.webp" alt="Dragon Radar Logo" className=" w-auto" width={120} height={120} />
          <h1 className="text-8xl font-bold font-saiyan text-saiyanYellow text-border">Dragon<span className="text-saiyanRed ml-2">Radar</span></h1>
        </section>
        <section>
          <p className="text-2xl font-bold dark:text-white">Search all of the Dragon Ball characters and more!</p>
        </section>
        <section className="p-8 flex items-center justify-center gap-4 w-full">
          {
            PAGES.map((page) => (
              <HomeCard key={page.title} {...page} />
            ))
          }
        </section>
      </main>
    </>
  );
}

export const HomeCard = ({ title, description, url }: typeof PAGES[number]) => {
  return (
    <div className="w-full max-w-[250px] py-6 px-4 flex flex-col items-center justify-center gap-2 border rounded-lg duration-300 hover:scale-105">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500 text-center">{description}</p>
      <a href={url} className="text-center text-xl font-bold text-saiyanYellow">Go to {title}</a>
    </div>
  )
}
