'use client';
import { CustomButton } from '@/components';
import { buttonType } from '@/types';
import React from 'react';

export default function NotFound({ reset }: { error: Error; reset: () => void }) {

  return (
    <div className='wrapper flex-1 w-1/3 flex flex-col justify-center items-center gap-y-5'>
      <p className='title'>Упс!</p>
      <p className='default-text'>Щось пішло не так</p>
      <CustomButton onClick={() => reset()} theme = {buttonType.secondary}>
        Перезапустити
      </CustomButton>
    </div>
  );
}
