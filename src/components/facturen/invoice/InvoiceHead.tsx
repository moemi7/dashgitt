'use client';

import StatusBadge from './StatusBadge';

interface InvoiceHeadProps {
  status: string;
  children: React.ReactNode;
}

const InvoiceHead: React.FC<InvoiceHeadProps> = ({ status, children }) => {
  return (
    <div className="flex justify-between rounded-md bg-[#FFFFFF] px-8 py-5 dark:bg-[#1E2139]">
      <div className="flex flex-1 items-center justify-between gap-4 sm:justify-normal">
        <span className="text-[#858BB2] dark:text-[#DFE3FA]">Status</span>
        <StatusBadge status={status} />
      </div>
      <div className="hidden gap-2 sm:flex">{children}</div>
    </div>
  );
};

export default InvoiceHead;
