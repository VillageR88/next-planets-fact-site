import ImagePlanet from '@/app/components/ImagePlanet';
import dataJson from '@/public/assets/data.json';

export default function Planet({ params }: { params: { slug: string } }) {
  const data = dataJson.find((item) => item.name.toLowerCase() === params.slug);
  if (!data) return;
  return (
    <>
      <div className="mx-auto flex max-w-[1110px] justify-between pl-[170px]">
        <div className="relative mt-[242px] size-[290px]">
          <ImagePlanet src={data.images.planet.slice(1)} alt={`Image of ${data.name}`} />
        </div>
        <div className="mt-[126px] h-[541px] w-[350px] bg-white"></div>
      </div>
      <ul className="mx-auto mt-[87px] flex w-full max-w-[1110px] justify-between gap-[30px]">
        {[1, 2, 3, 4].map((item) => (
          <li className="h-[128px] w-[255px] bg-white" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
