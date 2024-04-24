'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <button
      className="bg-popupBg p-2 text-sm font-semibold text-primary transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default MenuItem;
