'use client';

import { SafeUser } from '@/types';

import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import UserMenu from './UserMenu';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <header className="bg-nav absolute left-0 top-0 z-30 flex w-full justify-between md:h-full md:w-auto md:flex-col md:rounded-br-[20px] md:rounded-tr-[20px]">
      <Logo />
      <nav className="flex items-center md:flex-col">
        <ThemeToggler />
        <div className="h-full w-px bg-[#494E6E] md:h-px md:w-full"></div>
        <UserMenu currentUser={currentUser} />
      </nav>
    </header>
  );
};

export default Navbar;
