import Image from 'next/image';
import imageMobileMenu from '@/public/assets/icon-hamburger.svg';
export default function ButtonMobileMenu() {
  return (
    <button
      title="Menu"
      type="button"
      className="relative flex h-[17px] w-[24px] items-center justify-center md:hidden"
    >
      <Image fill src={imageMobileMenu as string} alt="mobile menu" />
    </button>
  );
}
