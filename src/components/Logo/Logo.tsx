import { Icon } from '@/components';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export const Logo = ({style}: {style?: string}) => {
  return (
    <div className={clsx('flex', style)}>
      <Link href='/' className='flex items-center'>
        <Icon name='icons/chip-logo' className='w-[23px] h-[23px]' />
        <p>Чип Чендж</p>
      </Link>
    </div>
  );
};
