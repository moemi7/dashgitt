'use client';

import Image from 'next/image';

import image from '../../public/images/illustration-empty.svg';
import Button from './Button';
import { useRouter } from 'next/navigation';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  subtitle,
  showReset
}) => {
  const router = useRouter();
  return (
    <div className="w-full flex-1 self-center overflow-y-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-16 mt-6 w-[220px] sm:w-[240px]">
          <Image src={image} priority alt="Illustration" />
        </div>
        <h2 className="mb-4 w-[220px] text-center text-[20px] font-bold text-primary sm:w-[240px]">
          {title}
        </h2>
        <p className="mb-6 w-[220px] text-center text-sm font-medium text-secondary sm:w-[240px]">
          {subtitle}
        </p>
        {showReset && (
          <Button
            purple
            label="Go to Home Page"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
