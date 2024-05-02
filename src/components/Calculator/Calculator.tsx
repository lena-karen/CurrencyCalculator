import React from 'react';
import Image from 'next/image';
import { TextBlock } from '../TextBlock/TextBlock';
import { buttonType } from '@/types/buttonTypes';

export const Calculator = () => {
  return (
    <section id='calculator' className='flex justify-around items-center py-[120px] wrapper'>
      <div className='w-3/4 flex'>
        <div className=''>
          <TextBlock
            title='Конвертер валют'
            titleStyle='title'
            text='Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.'
            textStyle='text-_707C87 text-xl font-400 py-[27px]'
            buttonTheme={buttonType.secondary}
            buttonTitle='Конвертувати валюту'
			link = '/converter'
		
          />
        </div>

        <Image width={436} height={314} src='/images/calculator/calculator.png' alt='Calculator bank card' />
      </div>
    </section>
  );
};
