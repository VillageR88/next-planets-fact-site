import dataJson from '@/public/assets/data.json';
import Link from 'next/link';
import { tPlanet } from '../_lib/interfaces';

const titleLogo = 'THE PLANETS';

export default function Navbar({ planet, mode }: { planet: string; mode: string }) {
  return (
    <nav className="flex h-fit w-full flex-col">
      <div className="flex h-[159px] w-full flex-col items-center justify-center gap-[39px] px-[32px] xl:h-[85px] xl:flex-row xl:justify-between">
        <span className="font-antonio text-[28px] font-medium tracking-[-1.05px] text-[white]">{titleLogo}</span>
        <ul className="flex gap-[33px]">
          {(dataJson as tPlanet[]).map(({ name }) => (
            <li key={name}>
              <Link
                className={name.toLowerCase() === planet ? 'pointer-events-none' : ''}
                href={`/${name.toLowerCase()}/${mode}`}
              >
                <h4 className={`text-white/75 transition-colors hover:text-white`}>{name.toLocaleUpperCase()}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-px w-full border-b border-white/20" />
    </nav>
  );
}
