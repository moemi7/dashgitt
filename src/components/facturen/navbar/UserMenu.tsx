'use client';

import { SafeUser } from '@/types';

import { useCallback, useState } from 'react';
import { signOut } from 'next-auth/react';

import Avatar from './Avatar';
import MenuItem from './MenuItem';

import { useAppDispatch } from '@/libs/redux/hooks';
import { onOpen as onRegisterModalOpen } from '@/libs/redux/features/modals/register-modal-slice';
import { onOpen as onLoginModalOpen } from '@/libs/redux/features/modals/login-modal-slice';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen]);

  return (
    <div className="relative flex w-full justify-center">
      <button
        aria-label="user menu"
        className="mx-2 p-4 sm:mx-4 md:my-2"
        onClick={toggleOpen}
      >
        <Avatar src={currentUser?.image} />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mr-2 mt-2 w-[200px] overflow-hidden rounded-[8px] shadow-xl md:left-full md:top-1/2 md:ml-2 md:mr-0 md:mt-0 md:-translate-y-1/2">
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                <MenuItem onClick={() => signOut()} label="Sign out" />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    setIsOpen(false);
                    dispatch(onLoginModalOpen());
                  }}
                  label="Login"
                />
                <MenuItem
                  onClick={() => {
                    setIsOpen(false);
                    dispatch(onRegisterModalOpen());
                  }}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
