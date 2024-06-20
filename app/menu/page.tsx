import LayoutMenu from '@/app/components/layout';

export default function Menu({ params }: { params: { planet: string; mode: string } }) {
  console.log('params', params);
  return <LayoutMenu params={params}></LayoutMenu>;
}
