import cn from '@/utils/classNames';
import * as React from 'react';

const sizeMaps = {
  xs: 'text-[12px] leading-[18px]',
  sm: 'text-[14px] leading-[20px]',
  md: 'text-[16px] leading-[24px]',
  lg: 'text-[18px] leading-[28px]',
  xl: 'text-[20px] leading-[30px]',
  xxl: 'text-[30px] leading-[38px]',
  xxxl: 'text-[36px] leading-[44px]',
};
const colorMaps = {
  primary: 'text-clr-txt-primary',
  secondary: 'text-clr-txt-secondary',
  brandSecondary: 'text-clr-txt-brand-secondary',
  tertiary: 'text-clr-txt-tertiary',
  quarterary: 'text-clr-txt-quarterary',
  error: 'text-clr-txt-error-primary',
  brandPrimary: 'text-clr-txt-brand-primary',
  grey: 'text-clr-txt-placeholder-subttl',
};
const variantMaps = {
  guide: cn(sizeMaps.sm, colorMaps.quarterary),
  description: cn(sizeMaps.sm, colorMaps.tertiary),
  heading: cn('font-semibold', sizeMaps.xxl, colorMaps.primary),
  'block-title': cn('font-semibold', sizeMaps.xl, colorMaps.secondary),
  title: 'font-semibold',
  error: cn('font-semibold', sizeMaps.sm, colorMaps.error),
};
export interface IAppProps extends React.PropsWithChildren {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  color?:
    | 'primary'
    | 'secondary'
    | 'brandSecondary'
    | 'quarterary'
    | 'tertiary'
    | 'brandPrimary'
    | 'error'
    | 'grey';
  variant?:
    | 'guide'
    | 'heading'
    | 'block-title'
    | 'title'
    | 'error'
    | 'description';
  align?: 'left' | 'right' | 'center';
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div';
  weight?: 'bold' | 'semibold' | 'medium' | 'normal' | 'light';
}

const BaseParagraph = (props: Readonly<IAppProps>) => {
  const tag = props.tag ?? 'p';
  return React.createElement(
    tag,
    {
      className: cn(
        props.align ? `text-${props.align}` : 'text-left',
        props.weight && `font-${props.weight}`,
        props.variant && variantMaps[props.variant],
        props.size && sizeMaps[props.size],
        props.color && colorMaps[props.color],
        props.className,
      ),
    },
    props.children,
  );
};

export default BaseParagraph;
