import ImagePlanet from '@/app/components/ImagePlanet';
import Image from 'next/image';
import iconSource from '@/public/assets/icon-source.svg';
import dataJson from '@/public/assets/data.json';
import Link from 'next/link';
import Navbar from '@/app/home/navbar';

const bgColor = {
  mercury: 'bg-[#419EBB]',
  venus: 'bg-[#EDA249]',
  earth: 'bg-[#6D2ED5]',
  mars: 'bg-[#D14C32]',
  jupiter: 'bg-[#D83A34]',
  saturn: 'bg-[#CD5120]',
  uranus: 'bg-[#1EC1A2]',
  neptune: 'bg-[#2D68F0]',
};

const titleSource = 'Source :';
const titleWikipedia = 'Wikipedia';
const titleRotation = 'ROTATION TIME';
const titleRevolution = 'REVOLUTION TIME';
const titleRadius = 'RADIUS';
const titleTemperature = 'AVERAGE TEMP.';

enum Mode {
  overview = 'overview',
  structure = 'structure',
  geology = 'geology',
}
const titleButtons = {
  overview: 'OVERVIEW',
  structure: 'INTERNAL STRUCTURE',
  geology: 'SURFACE GEOLOGY',
};
const links = {
  overview: 'overview',
  structure: 'internal-structure',
  geology: 'surface-geology',
};

export default function Planet({ params }: { params: { planet: string; mode: string } }) {
  const data = dataJson.find((item) => item.name.toLowerCase() === params.planet);
  if (!data) return;
  const srcPlanet = {
    overview: data.images.planet.slice(1),
    'internal-structure': data.images.internal.slice(1),
    'surface-geology': data.images.planet.slice(1),
  };
  const additionalImage = params.mode === links.geology ? data.images.geology.slice(1) : undefined;
  console.log(data[Object.entries(links).find(([, value]) => value === params.mode)?.[0] as keyof typeof links].source);
  return (
    <>
      <Navbar planet={params.planet} mode={params.mode} />
      <div className="mx-auto flex max-w-[1110px] justify-between">
        <div className="relative mt-[122px] flex size-[613px] flex-col items-center justify-center">
          <ImagePlanet src={srcPlanet[params.mode as keyof typeof srcPlanet]} alt={`Image of ${data.name}`} />
          {additionalImage && (
            <Image
              width={163}
              height={199}
              src={additionalImage}
              className="absolute left-1/2 top-0 mt-[390px] h-[199px] w-[163px] -translate-x-1/2"
              alt={`Image of ${data.name} geology`}
            />
          )}
        </div>
        <div className="mt-[126px] h-[541px] w-[350px]">
          <h1>{data.name.toUpperCase()}</h1>
          <p className="mt-[23px]">
            {
              data[Object.entries(links).find(({ '1': value }) => value === params.mode)?.[0] as keyof typeof links]
                .content
            }
          </p>
          <div className="mt-[24px] flex items-center gap-[5px] text-[14px] text-white/50">
            <span className="font-leagueSpartan font-normal">{titleSource}</span>
            <Link
              className="flex items-center gap-[9px] font-leagueSpartan font-bold underline"
              href={
                data[Object.entries(links).find(({ '1': value }) => value === params.mode)?.[0] as keyof typeof links]
                  .source
              }
            >
              {titleWikipedia}
              <Image priority className="size-fit" src={iconSource as string} alt="Icon source" />
            </Link>
          </div>
          <ul className="mt-[39px] flex h-[176px] w-full flex-col gap-[16px]">
            {Object.values(Mode).map((item, index) => (
              <li key={index}>
                <Link href={`/${params.planet}/${links[item]}`} passHref>
                  <button
                    className={`${params.mode === links[item] ? bgColor[params.planet as keyof typeof bgColor] : 'outline transition-colors duration-100 hover:bg-[#D8D8D8]/20'} flex h-[48px] w-full items-center gap-[28px] pl-[28px] font-leagueSpartan outline-1 outline-white/20`}
                    type="button"
                  >
                    <span className="text-[12px] font-bold leading-[25px] tracking-[2.57px] text-white/50">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[12px] font-bold leading-[25px] tracking-[2.57px] text-white">
                      {titleButtons[item]}
                    </span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="mx-auto mt-[87px] flex w-full max-w-[1110px] justify-between gap-[30px]">
        {[
          { title: titleRotation, description: data.rotation },
          {
            title: titleRevolution,
            description: data.revolution,
          },
          { title: titleRadius, description: data.radius },
          {
            title: titleTemperature,
            description: data.temperature,
          },
        ].map((item, index) => (
          <li className="h-[128px] w-[255px] pl-[23px] pt-[20px] outline outline-1 outline-white/20" key={index}>
            <h3 className="text-white/50">{item.title}</h3>
            <h2 className="text-white">{item.description.toUpperCase()}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}