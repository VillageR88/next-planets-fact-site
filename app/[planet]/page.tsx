import ImagePlanet from '@/app/components/ImagePlanet';
import Image from 'next/image';
import iconSource from '@/public/assets/icon-source.svg';
import dataJson from '@/public/assets/data.json';
import Link from 'next/link';

export default function Planet({ params }: { params: { planet: string } }) {
  const titleSource = 'Source :';
  const titleWikipedia = 'Wikipedia';
  const titleRotation = 'ROTATION TIME';
  const titleRevolution = 'REVOLUTION TIME';
  const titleRadius = 'RADIUS';
  const titleTemperature = 'AVERAGE TEMP.';
  const data = dataJson.find((item) => item.name.toLowerCase() === params.planet);
  if (!data) return;
  return (
    <>
      <div className="mx-auto flex max-w-[1110px] justify-between pl-[170px]">
        <div className="relative mt-[242px] size-[290px]">
          <ImagePlanet src={data.images.planet.slice(1)} alt={`Image of ${data.name}`} />
        </div>
        <div className="mt-[126px] h-[541px] w-[350px]">
          <h1>{data.name.toUpperCase()}</h1>
          <p className="mt-[23px]">{data.overview.content}</p>
          <div className="mt-[24px] flex items-center gap-[5px] text-[14px] text-white/50">
            <span>{titleSource}</span>
            <Link className="flex items-center gap-[9px] font-bold underline" href={data.overview.source}>
              {titleWikipedia}
              <Image className="size-fit" src={iconSource as string} alt="Icon source" />
            </Link>
          </div>
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
