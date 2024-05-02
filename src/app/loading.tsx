import { Loader } from '@/components';
import React from 'react';

export default function Loading() {
  return (
    <div className='flex justify-center items-center'>
     <Loader text = 'Загрузка...'  />
    </div>
  );
}
