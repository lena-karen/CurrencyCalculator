import { Icon, IconWithText, Logo, Nav } from '@/components';

export const Footer = () => {
  const adressData = [
    '04128, м.Київ, вул. Хрещатик, 19',
    'Ліцензія НБУ №156',
    `Ⓒ ПАТ ЧіпЧендж, 2019-${new Date(Date.now()).getFullYear()}`,
  ];
  return (
    <footer className='bg-_F6F7FF pt-[60px] pb-0'>
      <div className='wrapper'>
        <nav className='mx-auto flex items-flex-start justify-between py-6 lg:px-8'>
          <div className='flex flex-col'>
            <Logo />
            <div className='mt-4'>
              {adressData.map((text) => (
                <p key={Date.now() + Math.random()} className='text-_707C87 text-xs'>
                  {text}
                </p>
              ))}
            </div>
          </div>
          <Nav style='flex-col pb-0' linkStyle='pb-[20px]' />

          <IconWithText icon='icons/smartphone' text='3773' link='#' additionalText='Цілодобова підтримка' style = 'justify-start' />
          <IconWithText
            icon='icons/handset'
            text='8 800 111 22 33'
            link='#'
            additionalText='Безкожтовно для дзвінків в межах України'
          />
          <div className='flex gap-3 h-max'>
            <Icon name='icons/instagram-icon' className='w-6 h-6' />
            <Icon name='icons/facebook-icon' className='w-6 h-6' />
            <Icon name='icons/twitter-icon' className='w-6 h-6' />
            <Icon name='icons/youtube-icon' className='w-6 h-6' />
          </div>
        </nav>
      </div>
    </footer>
  );
};
