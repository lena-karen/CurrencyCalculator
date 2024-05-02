import React, { FC } from 'react';

import { buttonType } from '@/types/buttonTypes';
import { CustomButton } from '../CustomButton/CustomButton';
import Link from 'next/link';

type TextBlockProps = {
  title?: string;
  titleStyle?: string;
  text: string;
  textStyle?: string;
  buttonTheme?: buttonType.primary | buttonType.secondary | buttonType.ghost;
  buttonTitle: string;
  link?: string;
};
export const TextBlock: FC<TextBlockProps> = ({
  title,
  titleStyle,
  text,
  textStyle,
  buttonTheme,
  buttonTitle,
  link,
}) => {
  const Block = link ? (
    <Link href={link}>
      <CustomButton theme={buttonTheme}>
       {buttonTitle}
      </CustomButton>
    </Link>
  ) : (
    <CustomButton theme={buttonTheme}>
      {buttonTitle}
    </CustomButton>
  );

  return (
    <div>
      {title && <h2 className={`${titleStyle}`}>{title}</h2>}
      <p className={`${textStyle}`}>{text}</p>
      {Block}
    </div>
  );
};
