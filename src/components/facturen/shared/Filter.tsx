import React, { useState } from 'react';
import { ArrowDown } from '@/assets/icons';
import Check from '../inputs/Check';
import { useSearchParams } from 'next/navigation';

const Filter = () => {
  const params = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);

  const draft = params?.get('draft');
  const pending = params?.get('pending');
  const paid = params?.get('paid');

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 p-4 text-xs font-bold text-primary sm:px-6 sm:py-4"
      >
        <span>
          Filter <span className="hidden sm:inline">by status</span>
        </span>
        <span className={`${isOpen && 'rotate-180'}`}>
          <ArrowDown />
        </span>
      </button>
      {isOpen && (
        <div className="bottom-100 mt- shadow-customShadow bg-popupBg absolute left-1/2 mt-1 flex w-[192px] -translate-x-1/2 flex-col gap-4 rounded p-6">
          <Check label="draft" id="draft" checked={!draft ? true : false} />
          <Check
            label="pending"
            id="pending"
            checked={!pending ? true : false}
          />
          <Check label="paid" id="paid" checked={!paid ? true : false} />
        </div>
      )}
    </div>
  );
};

export default Filter;
