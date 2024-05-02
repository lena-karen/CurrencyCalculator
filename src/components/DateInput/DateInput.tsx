'use client';
import { FORM_FIELDS, IFormInput } from '@/types';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export const DateInput = ({ register, onChange }: { register: UseFormRegister<IFormInput>; onChange: () => void }) => {
  let now = new Date();
  const formatteMaxDate = now.toISOString().split('T')[0];
  now.setDate(now.getDate() - 7);
  const formatteMinDate = now.toISOString().split('T')[0];

  return (
    <div className='relative w-[220px] h-[60px] flex gap-x-4 rounded-md shadow-sm'>
      <input
        {...register(FORM_FIELDS.DATE, { onChange })}
        id='date'
        type='date'
        min={formatteMinDate}
        max={formatteMaxDate}
        className=' outline-none w-full h-[full] border-2 border-[_C1C2CA] text-center text-xl font-600 text-_707C87 pr-[17px]'
      />
    </div>
  );
};
