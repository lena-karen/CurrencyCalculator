import React from 'react';
import { Icon } from '../Icon/Icon';

export const HistoryItem = ({
  date,
  inAmount,
  inCurrency,
  outAmount,
  outCurrency,
}: {
  date: string;
  inAmount: number;
  inCurrency: string;
  outAmount: number;
  outCurrency: string;
}) => {
  return (
    <div className='bg-white rounded-[4px] p-[16px] grid grid-cols-[auto_auto_54px_auto] w-[48%]'>
      <p className='text-center font-400 text-lg text-_C1C2CA mr-[15px]'>{date}</p>
      <p className='text-center inline-block font-600 text-lg text-_707C87'>
        {inAmount}
        <span className='ml-1'>{inCurrency}</span>
      </p>
      <Icon name='icons/arrow' className='h-[10px] w-[14px] mx-[20px]' />
      <p className='text-center inline-block font-600 text-lg text-_707C87'>
        {outAmount}
        <span className='ml-1'>{outCurrency}</span>
      </p>
    </div>
  );
};
