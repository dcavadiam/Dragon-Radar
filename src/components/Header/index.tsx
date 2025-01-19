import Image from "next/image"
import Link from "next/link"

import { IconBrandPlanetscale } from '@tabler/icons-react'
import { IconUser } from '@tabler/icons-react'

export const Header = () => {
    return (
        <header className="flex justify-between items-center w-full py-3 px-6 border-b border-gray-800">
            <Link href="/" className="flex items-center gap-1 w-fit">
                <Image src="/dragon-radar-logo.webp" alt="Dragon Radar Logo" className="h-10 w-auto" width={40} height={40} />
                <p className="text-4xl font-bold font-saiyan text-saiyanYellow text-border">Dragon<span className="text-saiyanRed ml-2">Radar</span></p>
            </Link>

            <nav className="flex items-center gap-2 space-x-4 w-fit">
                <a className="font-bold hover:text-saiyanYellow duration-300 hover:scale-105" href="#">
                    <span className="w-fit flex gap-1">
                        <IconUser stroke={1.5} />
                        Characters
                    </span>
                </a>
                <a className="font-bold hover:text-saiyanRed duration-300 hover:scale-105" href="#">
                    <span className="w-fit flex gap-1">
                        <IconBrandPlanetscale stroke={1.5} />
                        Planets
                    </span>
                </a>
            </nav>
        </header>
    )
}