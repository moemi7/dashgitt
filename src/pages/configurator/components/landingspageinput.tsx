"use client";


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const Landingspageinput: React.FC = ({
}) => {
  const router = useRouter();
  return (
    <div className="self-center flex-1 w-full overflow-y-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-16 mt-6 w-[220px] sm:w-[240px]">
        </div>
        <h2 className="text-[20px] font-bold text-primary mb-4 w-[220px] sm:w-[240px] text-center">
          Veel succes,
        </h2>
        <p className="text-sm font-medium text-center text-secondary mb-6 w-[220px] sm:w-[240px]">
          Checklist
        </p>
        <div>
        <Input className="h-28 w-40" />

        </div>
        
         
          
          <Button className="text-[20px] font-bold text-primary mb-4 w-[50px] sm:w-[70px] text-center mt-6" 
                    
            onClick={() => router.push("/")}
          />
        
      </div>
    </div>
  );
};

export default Landingspageinput;
