'use client';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto h-full max-w-[880px] px-6 pb-0 pt-[100px] sm:px-12 sm:pb-8 sm:pt-[130px] md:px-4 md:pl-[128px] md:pt-[72px]">
      {children}
    </div>
  );
};

export default Container;
