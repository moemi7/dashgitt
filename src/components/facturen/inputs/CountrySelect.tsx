'use client';

import React from 'react';
import Select from 'react-select';

import useCountries from '@/hooks/useCountries';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type CountrySelectValue = {
  value: string;
  flag: string;
  label: string;
};

interface CountrySelectProps {
  id: string;
  label: String;
  value?: CountrySelectValue;
  register: UseFormRegister<FieldValues>;
  onChange: (value: CountrySelectValue) => void;
  errors: FieldErrors;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  id,
  label,
  value,
  register,
  onChange,
  errors
}) => {
  const { getAll } = useCountries();
  return (
    <div className="relative flex w-full flex-col gap-y-2.5">
      <label
        className={`
            text-xs font-medium leading-4 text-[#7E88C3] dark:text-[#DFE3FA]
            ${errors[id] && 'text-[#EC5757] dark:text-[#EC5757]'}
        `}
      >
        {label}
      </label>
      <Select
        instanceId={id}
        {...register(id, {
          required: {
            value: true,
            message: "can't be empty"
          }
        })}
        placeholder="Select country"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>{option.label}</div>
          </div>
        )}
        className={`${errors[id] && 'react-select-error'}`}
        classNamePrefix="react-select"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            borderRadius: '4px',
            borderWidth: '1px',
            primary: '#7C5DFA',
            primary25: 'transparent'
          }
        })}
      />
      {errors[id] && (
        <span className="absolute right-0 top-0 max-w-[40px] text-[7px] font-medium lowercase text-[#EC5757]">
          {errors[id]?.message as string}
        </span>
      )}
    </div>
  );
};

export default CountrySelect;
