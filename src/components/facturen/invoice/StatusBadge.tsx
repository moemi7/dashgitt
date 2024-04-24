import React from 'react';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <div
      className={`row-span-2 flex items-center justify-center rounded-md px-4 py-2.5 capitalize sm:row-span-1
                  ${status === 'pending' && 'bg-[#FF8F00]/5 text-[#FF8F00]'}
                  ${
                    status === 'draft' &&
                    'bg-[#373B53]/5 text-[#373B53] dark:bg-[#DFE3FA]/5 dark:text-[#DFE3FA]'
                  }
                  ${status === 'paid' && 'bg-[#33D69F]/5 text-[#33D69F]'}`}
    >
      <span
        className={`mr-3 inline-block h-2 w-2 rounded-full
                    ${status === 'pending' && 'bg-[#FF8F00]'}
                    ${status === 'draft' && 'bg-[#373B53] dark:bg-[#DFE3FA]'}
                    ${status === 'paid' && 'bg-[#33D69F]'}`}
      ></span>
      <span className="pt-1">{status}</span>
    </div>
  );
};

export default StatusBadge;
