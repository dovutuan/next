'use client';
import { IIndexable } from '@/types/Generic.type';
import { isEmpty } from 'lodash';
import { usePathname, useSearchParams } from 'next/navigation';
import queryString from 'query-string';

const useGetFullPath = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchParamsObj: IIndexable = Object.fromEntries(
    searchParams.entries(),
  );
  return isEmpty(searchParamsObj)
    ? pathname
    : `${pathname}/?${queryString.stringify(searchParamsObj)}`;
};

export default useGetFullPath;
