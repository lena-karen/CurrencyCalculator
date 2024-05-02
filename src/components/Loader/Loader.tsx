'use client';
import React from 'react';
import { Hourglass } from 'react-loader-spinner';

export const Loader = ({ text }: { text: string }) => {
  return (
    <div className='flex flex-col items-center'>
      <p className='default-text'>{text}</p>
      <Hourglass
        visible={true}
        height='80'
        width='80'
        ariaLabel='hourglass-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
};
