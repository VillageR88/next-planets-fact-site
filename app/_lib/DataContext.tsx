'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export const DataContext = createContext(
  {} as {
    showSlideshow: boolean;
    setShowSlideshow: Dispatch<SetStateAction<boolean>>;
    showGallery: boolean;
    setShowGallery: Dispatch<SetStateAction<boolean>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [showGallery, setShowGallery] = useState<boolean>(false);

  return (
    <DataContext.Provider
      value={{
        showSlideshow,
        setShowSlideshow,
        showGallery,
        setShowGallery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
