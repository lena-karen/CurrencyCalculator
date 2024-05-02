import { IconWithText, Logo, Nav } from '@/components';

export const Header = () => {
  return (
    <header className='bg-_F6F7FF'>
      <div className='wrapper'>
        <nav className='mx-auto flex items-center justify-between py-6 lg:px-8'>
          <Logo  style = 'lg:flex-1' />
          
          <Nav style = 'flex-row' />
          <IconWithText icon = 'icons/login-icon' text = 'Особистий кабінет' link = '#' style = 'justify-end' />
        </nav>
      </div>
    </header>
  );
};
