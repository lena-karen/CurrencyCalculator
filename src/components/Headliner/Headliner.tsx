import Image from 'next/image';
export const Headliner = () => {
  return (
    <section id='headliner' className='relative h-96'>
      <div className='block h-96 absolute -z-20 top-0 left-0 w-full'>
        <Image
          src='/images/headliner/headliner-bg.png'
          fill={true}
          alt='Floating in a sea of documents'
          style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
        />
      </div>
      <div className='wrapper flex h-full justify-around items-center'>
        <div className='w-1/4 h-full bg-blue-400'>
          <div>
            <h1 className='text-center md:text-left default-heading text-40px md:text-5xl leading-tight'>Чіп Чендж</h1>
            <p className='default-text mt-4 mb-5 text-center md:text-left md:!leading-7 lg:!leading-9'>
              Обмінник валют навчальний
            </p>
            {/*<CustomButton*/}
            {/*  disabled={disabled}*/}
            {/*  theme={buttonType.secondary}*/}
            {/*  className=' border-white text-white'*/}
            {/*  isLoading={isLoading}*/}
            {/*>*/}
            {/*  <p className={`w-full ${isLoading && 'mr-5'}`}>*/}
            {/*    {isLoading ? `${t('send_button_loading')}...` : t('send_button')}*/}
            {/*  </p>*/}
            {/*</CustomButton>*/}
          </div>
        </div>
        <div className='w-1/4 h-[216px]'>
          <Image width={341} height={216} src='/images/headliner/bankcard.png' alt={'Example bank card'} />
        </div>
      </div>
    </section>
  );
};
