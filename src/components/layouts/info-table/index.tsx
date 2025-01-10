import cn from '@/utils/classNames';
import React from 'react';

interface InfoTableProps extends React.PropsWithChildren {}
interface InfoTableRowProps extends React.PropsWithChildren {
  title: string;
  className?: string;
}

export const InfoTable = (props: InfoTableProps) => {
  return <ul className="flex flex-col">{props.children}</ul>;
};

export const InfoTableRow = React.forwardRef<HTMLLIElement, InfoTableRowProps>(
  (props, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          'flex min-h-[52px] w-full flex-row border-t border-solid border-clr-border-secondary last:border-b',
          props.className,
        )}
      >
        <div className="min-w-[80px] max-w-[200px] basis-1/4 bg-clr-bg-secondary px-[24px] py-[17px]">
          <span className="text-[12px] font-medium leading-[18px] text-clr-txt-tertiary">
            {props.title}
          </span>
        </div>
        <div className="basis-full break-all px-[24px] py-[17px] font-normal leading-[20px] text-clr-txt-tertiary">
          {props.children}
        </div>
      </li>
    );
  },
);

InfoTableRow.displayName = 'InfoTableRow';
