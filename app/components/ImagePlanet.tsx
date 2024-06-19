import Image from 'next/image';

export default function ImagePlanet({ src, alt }: { src: string; alt: string }) {
  return <Image fill src={src} className="size-full" alt={alt} />;
}
