import React, { FC } from 'react';
import Link from 'next/link';
import {Icon} from '@/components'
import { AllIconTypes } from '@/types';
import clsx from 'clsx';

type IconWithTextProps = {
	icon: AllIconTypes
	text: string;
	textStyle?: string;
	link: string
	additionalText?: string
	style?: string
  };

export const IconWithText: FC<IconWithTextProps> = ({icon, text, textStyle, link, additionalText, style}) => {
	return (
		<div className={clsx('flex flex-1', {'flex-none flex-col': additionalText}, style)}>
			<Link href={link} className={`text-sm font-semibold leading-6 text-gray-900 ${textStyle}`}>
				<Icon name={icon} className='h-[22px] w-5 mr-3' />
				{text}
			</Link>
			{additionalText && <div className = 'flex'>
				<div className = 'w-5 mr-3' />
				<p className = 'text-xs font-[400] text-_707C87 pt-2'>{additionalText}</p>
			</div>}
		</div>
	)
}