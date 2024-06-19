import Image from 'next/image';
import { tPlanet } from '@/app/_lib/interfaces';

export default function Planet({ dataPlanet }: { dataPlanet: string }) {
  return <main className="text-white">{dataPlanet}</main>;
}
