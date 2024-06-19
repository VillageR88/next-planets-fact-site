'use client';
import Logo from '@/app/components/Logo';
import ButtonSlideshow from '@/app/components/ButtonSlideshow';
import { ReactNode } from 'react';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';

export default function Navbar({ children }: { children: ReactNode }) {
  const { showGallery } = useContext(DataContext);
  return (
    <div
      className={`${showGallery ? 'h-screen overflow-hidden' : 'min-h-dvh md:min-h-screen'} z-0 flex flex-col items-center justify-start pb-[17px] pt-[24px] font-libreBaskerville md:py-[40px] xl:p-[40px]`}
    >
      <nav className="flex w-full flex-col">
        <div className="flex w-full items-center justify-between px-[40px] xl:px-0">
          <Logo />
          <ButtonSlideshow />
        </div>
        <div className="mt-[30px] w-full border-b border-[#E5E5E5] md:mt-[40px]"></div>
      </nav>
      {children}
    </div>
  );
}
