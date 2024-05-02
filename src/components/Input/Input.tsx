'use client';

import React from 'react';

import { FieldError, UseFormRegister } from 'react-hook-form';
import { FORM_FIELDS, IFormInput } from '@/types';
import clsx from 'clsx';

export const Input = ({
  register,
  placeholder,
  error,
  name,
  valueAsNumber,
  onChange,
}: {
  register: UseFormRegister<IFormInput>;
  placeholder?: string;
  error?: FieldError | undefined;
  name: FORM_FIELDS.IN_AMOUNT | FORM_FIELDS.OUT_AMOUNT;
  valueAsNumber: boolean;
  onChange: () => void;
}) => {
  return (
    <div className='flex gap-x-4 rounded-md relative'>
      <input
        {...register(name, { onChange, valueAsNumber })}
        type={valueAsNumber ? 'number' : 'text'}
        className={clsx(
          'appearance-none outline-none w-[220px] h-[60px] border-2 border-[_C1C2CA] text-center text-xl font-600 text-_707C87',
          { 'border-red-300': error },
        )}
        placeholder={placeholder}
      />

      {error && <span className='text-red-300 absolute -bottom-6 left-0'>{error.message}</span>}
    </div>
  );
};
