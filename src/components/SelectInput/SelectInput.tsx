'use client';

import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FORM_FIELDS, IFormInput } from '@/types';

export const SelectInput = ({
  register,
  name,
  currencies,
  onChange,

}: {
  register: UseFormRegister<IFormInput>;
  name: FORM_FIELDS.IN_CURRENCY | FORM_FIELDS.OUT_CURRENCY;
  currencies: string[];
  onChange: () => void;

}) => {

  return (
    <div className='relative flex items-center w-[120px] h-[60px] border-2 border-[_C1C2CA] text-center'>
      <select {...register(name, { onChange })} className='outline-none w-[90%] text-center text-_707C87'>
        {currencies.map((currency) => (
          <option key={currency} value={currency} className = 'bg-white'>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
