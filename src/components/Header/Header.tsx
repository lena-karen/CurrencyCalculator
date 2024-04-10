import Link from 'next/link';
import { Icon } from '@/components';
import { PAGES } from '@/constants';

export const Header = () => {
  return (
    <header className='bg-white wrapper'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div className='flex lg:flex-1'>
          <Link href='/'>
            <Icon name='icons/chip-logo' className='h-8 w-auto' />
          </Link>
        </div>
        <div className='flex lg:gap-x-12'>
          {PAGES.map((page: any) => (
            <Link key={page.url} href={page.url} className='text-sm font-semibold leading-6 text-gray-900'>
              {page.title}
            </Link>
          ))}
        </div>
        <div className='flex flex-1 justify-end'>
          <Link href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            <Icon name='icons/login-icon' className='h-[22px] w-5 mr-3' />
            Особистий кабінет
          </Link>
        </div>
      </nav>
    </header>
  );
};
