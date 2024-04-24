'use client';

import { useCallback } from 'react';
import { Check } from '@/assets/icons';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

interface CheckProps {
  id: string;
  label: string;
  checked: boolean;
}

const Input: React.FC<CheckProps> = ({ id, label, checked }) => {
  const router = useRouter();
  const params = useSearchParams();

  const onChange = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    let updatedQuery: any = {
      ...currentQuery
    };

    if (params?.get(label) === 'false') {
      delete updatedQuery[label];
    } else {
      if (label === 'draft') {
        updatedQuery = { ...currentQuery, draft: false };
      } else if (label === 'pending') {
        updatedQuery = { ...currentQuery, pending: false };
      } else {
        updatedQuery = { ...currentQuery, paid: false };
      }
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <label
      className="relative cursor-pointer text-xs font-bold capitalize text-primary"
      htmlFor={id}
    >
      <input
        className="peer absolute h-0 w-0 cursor-pointer opacity-0"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div className="absolute left-0 top-0 block h-4 w-4 rounded border border-transparent bg-[#DFE3FA] transition hover:border-[#7C5DFA] peer-checked:border-[#7C5DFA] peer-checked:bg-[#7C5DFA] dark:bg-[#1E2139]"></div>
      <div className="absolute left-[2.5px] top-[3px] hidden peer-checked:block">
        <Check />
      </div>
      <span className="pl-7">{label}</span>
    </label>
  );
};

export default Input;
