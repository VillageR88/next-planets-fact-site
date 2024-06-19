import dataJson from '@/public/assets/data.json';
import Link from 'next/link';
import { tPlanet } from '../_lib/interfaces';

const titleLogo = 'THE PLANETS';

export default function Navbar({ mode }: { mode: string }) {
  return (
    <nav className="flex h-fit w-full flex-col">
      <div className="flex h-[85px] w-full items-center justify-between px-[32px]">
        <span className="font-antonio text-[28px] font-medium tracking-[-1.05px] text-[white]">{titleLogo}</span>
        <ul className="flex gap-[33px]">
          {(dataJson as tPlanet[]).map(({ name }) => (
            <li key={name}>
              <Link href={`/${name.toLowerCase()}/${mode}`}>
                <h4 className="text-white/75">{name.toLocaleUpperCase()}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-px w-full border-b border-white/20" />
    </nav>
  );
}
