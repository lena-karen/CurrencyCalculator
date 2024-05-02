'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { clsx } from 'clsx';
import { PAGES } from '@/constants';

export const Nav = ({ style, linkStyle }: { style: string; linkStyle?: string }) => {
  const pathname = usePathname();

  return (
    <div className={clsx('flex lg:gap-x-12 text-_707C87', style)}>
      {PAGES.map((page: any) => (
        <Link
          key={page.url}
          href={page.url}
          className={clsx(
            { 'text-_2C36F2': page.url === pathname },
            'text-sm font-semibold leading-6 ',
            linkStyle,
          )}
        >
          {page.title}
        </Link>
      ))}
    </div>
  );
};
