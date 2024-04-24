'use client';

import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  pattern?: { value: RegExp; message: string };
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: any;
  itemIndex?: number;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  pattern,
  type = 'text',
  disabled,
  required = false,
  register,
  errors,
  itemIndex
}) => {
  return (
    <div className="relative flex w-full flex-col gap-y-2.5">
      <label
        htmlFor={id}
        className={`
            text-xs font-medium leading-4 text-[#7E88C3] dark:text-[#DFE3FA]
            ${errors[id] && 'text-[#EC5757] dark:text-[#EC5757]'}
            ${
              itemIndex !== undefined &&
              errors['items'] &&
              errors['items'][itemIndex] &&
              errors['items'][itemIndex][`${id.split('.')[1]}`] &&
              'text-[#EC5757] dark:text-[#EC5757]'
            }
            ${itemIndex !== undefined && 'sm:hidden'}
        `}
      >
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        {...register(id, {
          required: {
            value: required,
            message: "can't be empty"
          },
          pattern
        })}
        placeholder=" "
        type={type}
        step="0.01"
        className={`w-full rounded border border-[#DFE3FA] bg-white px-5 py-4 text-xs font-bold text-[#0C0E16] outline-none transition disabled:cursor-not-allowed dark:border-[#252945] dark:bg-[#1E2139] dark:text-white
            ${
              errors[id] &&
              'border-[#EC5757] focus:border-[#EC5757] dark:border-[#EC5757] dark:focus:border-[#EC5757]'
            }
            ${
              itemIndex !== undefined &&
              errors['items'] &&
              errors['items'][itemIndex] &&
              errors['items'][itemIndex][`${id.split('.')[1]}`] &&
              'border-[#EC5757] focus:border-[#EC5757] dark:border-[#EC5757] dark:focus:border-[#EC5757]'
            }
            ${(id === 'postCodeFrom' || id === 'postCodeTo') && 'uppercase'}
            ${
              type === 'number' &&
              '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            }
          `}
      />
      {errors[id] && itemIndex === undefined && (
        <span className="absolute right-0 top-0 max-w-[40px] text-[7px] font-medium lowercase text-[#EC5757]">
          {errors[id]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Input;
