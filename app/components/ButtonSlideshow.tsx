'use client';
import { useContext } from 'react';
import { DataContext } from '../_lib/DataContext';
import { useRouter } from 'next/navigation';
import { Routes } from '@/app/routes';

export default function ButtonSlideshow() {
  const router = useRouter();
  const { showSlideshow } = useContext(DataContext);
  const buttonTitle = showSlideshow ? 'STOP SLIDESHOW' : 'START SLIDESHOW';
  return (
    <button
      onClick={() => {
        if (showSlideshow) router.push(Routes.home);
        else router.push(Routes.firstDetail);
      }}
      className="h-fit text-[9px] font-bold tracking-[2.57px] text-[#7D7D7D] transition-colors hover:text-black md:text-[12px]"
      type="button"
    >
      {buttonTitle}
    </button>
  );
}
