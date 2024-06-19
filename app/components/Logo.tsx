import Image from 'next/image';
import logo from '@/public/assets/shared/logo.svg';

export default function Logo() {
  return (
    <Image
      priority
      className="h-[32px] w-[113px] xl:h-[48px] xl:w-[170px]"
      width={170}
      height={48}
      src={logo as string}
      alt="logo"
    />
  );
}
