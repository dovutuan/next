'use client';
import cn from '@/utils/classNames';
import React from 'react';

interface Props extends React.PropsWithChildren {
  title?: string;
  titleNode?: React.ReactNode;
  className?: string;
}

const Block = (props: Props) => {
  return (
    <section className={cn('mb-[40px]', props.className)}>
      <div className="mb-[24px] flex flex-row items-center gap-[8px]">
        <span className="h-[36px] w-[8px] rounded bg-clr-bg-brand-solid" />
        {props.title && (
          <span className="text-[20px] font-semibold leading-[30px]">
            {props.title}
          </span>
        )}
        {props.titleNode && <>{props.titleNode}</>}
      </div>
      <div>{props.children}</div>
    </section>
  );
};

export default Block;
