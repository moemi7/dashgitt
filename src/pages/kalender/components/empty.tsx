'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from '@/routes/hooks';

//interface EmptyProps {
//   title?: string;
// subtitle?: string;
//  showReset?: boolean;
//}
//const Empty: React.FC<EmptyProps> = ({
//  title,
//  subtitle,
//  showReset,
//})
//{showReset && (
// <Button

// <h2>{title}</h2>

const Empty: React.FC = ({}) => {
  const router = useRouter();
  return (
    <div className="w-full flex-1 self-center overflow-y-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-16 mt-6 w-[220px] sm:w-[240px]"></div>
        <h2 className="mb-4 w-[220px] text-center text-[20px] font-bold text-primary sm:w-[240px]">
          Hallo
        </h2>
        <p className="mb-6 w-[220px] text-center text-sm font-medium text-secondary sm:w-[240px]">
          Goedendag
        </p>

        <Button onClick={() => router.push('/')} />
      </div>
    </div>
  );
};

export default Empty;
