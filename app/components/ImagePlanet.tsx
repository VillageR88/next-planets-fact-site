'use server';
import Image from 'next/image';
import dataJson from '@/public/assets/starter-code/data.json';

export default async function ImagePlanet() {
  if (typeof window === 'undefined') return null;
  const pathname = window.location.pathname;
  console.log(pathname);
  const data = dataJson.find((item) => item.name === pathname);
  return <Image src={data?.images.planet} />;
}
