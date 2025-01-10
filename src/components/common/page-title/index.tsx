'use client';
import React from 'react';
import BackArrowIcon from '/public/assets/icons/back-arrow.svg';
import cn from '@/utils/classNames';
import { useRouter } from 'next/navigation';

type PageTitleProps = {
  title: string;
  backPath?: string;
  classNames?: string;
  postFix?: React.ReactElement;
};

function PageTitle(props: Readonly<PageTitleProps>) {
  const router = useRouter();
  const renderTitle = () => {
    return (
      <div className="min-w-0 flex-1">
        <p className="truncate text-[30px] font-semibold leading-[44px]">
          {props.title}
        </p>
      </div>
    );
  };

  const renderBackIcon = () => {
    if (props.backPath) {
      return (
        <BackArrowIcon
          className="mr-[24px] cursor-pointer"
          onClick={onClickBackIcon}
        />
      );
    }
  };

  const onClickBackIcon = () => {
    if (props.backPath) {
      router.push(props.backPath);
    }
  };

  const renderPostfix = () => {
    return props.postFix ?? null;
  };
  return (
    <div className={cn('flex flex-row items-center', props.classNames)}>
      {renderBackIcon()}
      {renderTitle()}
      {renderPostfix()}
    </div>
  );
}

export default PageTitle;
