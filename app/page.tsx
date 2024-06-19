'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Planet } from './_lib/interfaces';
import dataJson from '@/public/assets/starter-code/data.json';

export default function Home() {
  const router = useRouter();
  const startPath =
    (dataJson as Planet[]).find((planet) => planet.name === 'Mercury')?.name.toLowerCase() ??
    dataJson[0].name.toLowerCase();

  useEffect(() => {
    router.push(startPath);
  }, [router, startPath]);

  return;
}
