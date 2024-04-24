'use client';

import Image from 'next/image';
import logo from '../../public/images/logo.svg';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative flex items-center justify-center overflow-hidden rounded-br-[20px] rounded-tr-[20px] bg-[rgb(124,93,250)] p-5 before:absolute 
                 before:left-0 before:top-1/2 before:h-1/2 before:w-full before:rounded-tl-[20px] before:bg-[rgb(146,119,255)] sm:p-6 md:p-8"
    >
      <div className="h-6.5 md:h-7">
        <Image
          className="relative z-40 h-full w-full object-cover"
          priority
          src={logo}
          alt="Invoice app logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
