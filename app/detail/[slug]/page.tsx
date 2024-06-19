'use client';
import Gallery from './Gallery';
import Main from './Main';
import Footer from '@/app/detail/[slug]/Footer';
import dataJson from '@/public/assets/data.json';

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { DataContext } from '@/app/_lib/DataContext';

export default function Page() {
  const router = useRouter();
  const { setShowSlideshow } = useContext(DataContext);
  const [pathname, setPathname] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  const titleButtonClose = 'CLOSE';

  useEffect(() => {
    const decodedPathname = decodeURI(window.location.pathname.split('/')[2].replace(/_/g, ' '));
    setPathname(decodedPathname);
  }, []);

  const data = dataJson.find((item) => item.name === pathname);
  const indexProgress = dataJson.findIndex((item) => item.name === pathname);
  const previousIndex = indexProgress - 1;
  const nextIndex = indexProgress + 1;

  useEffect(() => {
    if (dataJson[previousIndex]) router.prefetch(`/detail/${dataJson[previousIndex].name.replace(/ /g, '_')}`);
    if (dataJson[nextIndex]) router.prefetch(`/detail/${dataJson[nextIndex].name.replace(/ /g, '_')}`);
  }, [nextIndex, previousIndex, router]);

  useEffect(() => {
    setProgress(((indexProgress + 1) / dataJson.length) * 100);
  }, [indexProgress]);

  useEffect(() => {
    setShowSlideshow(true);
  }, [setShowSlideshow]);

  if (!data) return null;

  return (
    <div className="size-full">
      <Gallery data={data} titleButtonClose={titleButtonClose} />
      <Main data={data} />
      <Footer
        data={data}
        progress={progress}
        previousDisabled={indexProgress === 0}
        previousClicked={() => {
          if (dataJson[previousIndex]) {
            router.push(`/detail/${dataJson[previousIndex].name.replace(/ /g, '_')}`);
          }
        }}
        nextDisabled={indexProgress === dataJson.length - 1}
        nextClicked={() => {
          if (dataJson[nextIndex]) {
            router.push(`/detail/${dataJson[nextIndex].name.replace(/ /g, '_')}`);
          }
        }}
      />
    </div>
  );
}
