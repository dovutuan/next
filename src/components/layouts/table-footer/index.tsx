import cn from '@/utils/classNames';
import * as React from 'react';

interface IAppProps {
  count: React.ReactElement;
  pagination: React.ReactElement;
  className?: string;
}

const TableFooter: React.FC<IAppProps> = (props) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row flex-wrap items-center gap-x-[10px] gap-y-[8px]',
        props.className,
      )}
    >
      <div className="space-nowrap mr-auto">{props.count}</div>
      <div className="flex flex-1 justify-center whitespace-nowrap">
        {props.pagination}
      </div>
    </div>
  );
};

export default TableFooter;
