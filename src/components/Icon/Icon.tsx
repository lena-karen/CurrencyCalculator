import { type SVGProps } from 'react';
import { cn } from '@/utils/cn';
import { AllIconTypes } from '@/types';

export const Icon = ({
  name,
  childClassName,
  className,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: AllIconTypes;
  childClassName?: string;
}) => {
  return (
    <svg {...props} className={cn('inline self-center', className)}>
      <use href={`/svgs/sprite.svg#${name}`} />
    </svg>
  );
};
