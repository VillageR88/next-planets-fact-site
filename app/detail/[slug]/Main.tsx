'use client';
import Image from 'next/image';
import Link from 'next/link';
import { newLineHardCoder } from '@/app/_lib/functions';
import imageView from '@/public/assets/shared/icon-view-image.svg';
import { DataContext } from '@/app/_lib/DataContext';
import { useContext, useEffect, useState } from 'react';
import type { DataJson } from '@/app/_lib/interfaces';

export default function Main({ data }: { data: DataJson }) {
  const { setShowGallery } = useContext(DataContext);
  const titleViewImage = 'VIEW IMAGE';
  const title_goToSource = 'GO TO SOURCE';

  const FirstComponent = () => {
    const ArtistImage = ({ propClass }: { propClass: string }) => {
      return (
        <Image
          width={128}
          height={128}
          className={propClass}
          alt={data.artist.name + ' image'}
          src={data.artist.image.slice(1)}
          priority
        />
      );
    };
    const Block1 = () => {
      const HeroImage = () => {
        const [source, setSource] = useState(data.images.hero.large.slice(1));
        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth < 768) setSource(data.images.hero.small.slice(1));
            else setSource(data.images.hero.large.slice(1));
          };
          handleResize();
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        return (
          <Image
            className="md:h-[560px] md:max-w-[475px] xl:absolute"
            width={475}
            height={560}
            src={source}
            alt={data.name}
            priority
          />
        );
      };
      const ButtonViewImage = () => {
        return (
          <button
            onClick={() => {
              setShowGallery(true);
            }}
            type="button"
            className="absolute left-[16px] top-[16px] z-0 flex h-[40px] w-[152px] items-center justify-center gap-[14px] bg-black/[75.46%] text-white transition-colors duration-[50ms] hover:bg-white/[25.22%] md:bottom-[16px] md:top-auto xl:bottom-[80px]"
          >
            <Image className="size-fit" width={12} height={12} src={imageView as string} alt={titleViewImage} />
            <span className="text-[10px] font-bold leading-3 tracking-[2.14px]">{titleViewImage}</span>
          </button>
        );
      };
      return (
        <div className="relative size-full md:max-w-[475px]">
          <div className="relative flex size-full md:max-w-[475px]">
            <HeroImage />
            <ArtistImage propClass="bottom-0 left-[calc(30px+475px)] size-[128px] absolute xl:block hidden" />
            <ButtonViewImage />
          </div>
        </div>
      );
    };
    const Block2 = () => {
      return (
        <div className="flex h-full flex-col justify-between pr-[47px] md:pr-0 xl:w-fit">
          <div className="relative mt-[-79px] flex h-fit max-w-[280px] flex-col gap-[8px] bg-white py-[24px] pb-[67px] pl-[24px] md:ml-[-150px] md:mt-0 md:max-w-[445px] md:gap-[24px] md:pl-[65px] md:pt-0 xl:ml-[-65px]">
            <h1 className="w-full whitespace-pre-wrap text-pretty text-[24px] font-bold leading-[29px] text-black md:text-balance md:text-[56px] md:leading-[64px]">
              {newLineHardCoder(data.name)}
            </h1>
            <p className="text-[15px] text-[#7D7D7D]">{data.artist.name}</p>
          </div>
          <ArtistImage propClass="md:size-[128px] mt-[-47px] md:mt-0 z-0 size-[64px] xl:hidden block md:ml-[30px] ml-[16px]" />
        </div>
      );
    };
    return (
      <div className="flex w-fit max-w-[868px] flex-col justify-center md:w-full md:flex-row xl:max-w-full xl:justify-stretch">
        <Block1 />
        <Block2 />
      </div>
    );
  };

  const SecondComponent = () => {
    return (
      <div className="flex w-full max-w-[460px] flex-row justify-center md:max-w-[850px] xl:w-fit xl:max-w-fit xl:flex-col xl:justify-between xl:pl-[40px]">
        <div className="flex w-full max-w-[780px] flex-col items-end md:flex-row md:items-stretch xl:block">
          <h2 className="-z-10 flex w-fit text-[100px] font-bold leading-[100px] text-[#F3F3F3] md:w-full md:text-[200px] md:leading-[150px] xl:ml-0 xl:text-[14vw] screen1440:text-[200px]">
            {data.year}
          </h2>
          <div className="flex h-full flex-col justify-between gap-[39px] md:ml-[-550px] md:w-[457px] md:gap-[81px] xl:ml-0 xl:min-w-fit xl:gap-0">
            <p className="mt-[-28px] w-full text-[14px] font-bold leading-[28px] text-[#7D7D7D] md:mt-[75px] xl:ml-0 xl:mt-[-35px] xl:max-w-[350px]">
              {data.description}
            </p>
            <Link
              href={data.source}
              className="size-fit text-[9px] font-bold tracking-[1.93px] text-[#7D7D7D] underline decoration-[#7D7D7D] transition-colors hover:text-black xl:mb-[53px]"
            >
              {title_goToSource}
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <main className="mt-[24px] flex min-h-[624px] w-full max-w-full flex-col items-center justify-between px-[24px] md:mt-[40px] md:gap-[64px] xl:mt-[100px] xl:flex-row xl:items-stretch xl:gap-0 xl:px-0">
      <FirstComponent />
      <SecondComponent />
    </main>
  );
}
