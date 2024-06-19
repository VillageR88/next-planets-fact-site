import dataJson from '@/public/assets/starter-code/data.json';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex h-[85px] w-full items-center justify-between px-[32px]">
      <h1 className="font-antonio text-[28px] font-medium tracking-[-1.05px] text-[white]">THE PLANETS</h1>
      <ul className="flex gap-[33px]">
        {(dataJson as { name: string }[]).map(({ name }) => (
          <li key={name}>
            <Link href={`/${name.toLowerCase()}`}>
              <h4 className="text-white/75">{name.toLocaleUpperCase()}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
