'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
  ariaLabel?: string;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
  base?: boolean;
  grey?: boolean;
  purple?: boolean;
  red?: boolean;
  darkGrey?: boolean;
  customGrey?: boolean;
  stretch?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  ariaLabel,
  label,
  type,
  onClick,
  disabled,
  icon: Icon,
  base,
  grey,
  purple,
  red,
  darkGrey,
  customGrey,
  stretch
}) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      type={type ? type : 'button'}
      className={`relative flex items-center justify-center gap-4 rounded-full px-5 py-4 text-xs font-bold capitalize transition disabled:cursor-not-allowed disabled:bg-opacity-50 disabled:hover:bg-opacity-50 sm:px-6
        ${base && 'bg-baseBg hover:bg-baseBgHover text-[#7E88C3]'}
        ${red && 'bg-[#ec5757] text-white hover:bg-[#FF9797]'}
        ${purple && 'bg-[#7C5DFA] text-white hover:bg-[#9277FF]'}
        ${
          grey &&
          'bg-defaultBg hover:bg-defaultHoverBg text-[#7E88C3] dark:text-[#DFE3FA]'
        }
        ${darkGrey && 'bg-grey hover:bg-greyHover text-secondary'}
        ${customGrey && 'bg-greyCustom hover:bg-greyCustomHover text-secondary'}
        ${stretch && 'w-full'}
        ${Icon && 'sm:pl-12'}
      `}
    >
      {Icon && <Icon size={32} className="absolute left-0 ml-2" />}
      {label}
    </button>
  );
};

export default Button;
