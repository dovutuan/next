import * as React from 'react';
import ArrowRightIcon from '/public/assets/icons/arrow-right.svg';
import NoteIcon from '/public/assets/icons/note.svg';
import UserIcon from '/public/assets/icons/user.svg';
import CompanyIcon from '/public/assets/icons/company.svg';
import cn from '@/utils/classNames';
import Link from 'next/link';
import PATH_NAMES from '@/constants/PathNames';
import { useTranslation } from 'react-i18next';
import { usePathname, useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import { isValidRegex } from '@/utils/regex';

export interface IAppProps {
  isOpen: boolean;
}

export default function AppDrawerNavigationList(props: Readonly<IAppProps>) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const { t } = useTranslation('layout');

  const checkHighlight = (pathNames: string[], pathName: string) => {
    let isMatch = false;
    for (const p of pathNames) {
      const isReport = /^\/report\/\d+$/.test(pathName);
      const checkPath = isReport
        ? searchParams.get('backlink')?.replace(/\/\?(.*)/, '')
        : pathName;
      if (isValidRegex(p)) {
        isMatch = (isValidRegex(p) as RegExp).test(checkPath as string);
        if (isMatch) {
          break;
        }
      } else if (checkPath === p) {
        isMatch = true;
        break;
      }
    }

    return isMatch;
  };
  const items = React.useMemo(
    () => [
      {
        icon: NoteIcon,
        href: PATH_NAMES.EXAMS(),
        text: t('sidebar.examination_data'),
        pathNames: ['/exams'],
      },
      {
        icon: UserIcon,
        href: PATH_NAMES.USERS(),
        text: t('sidebar.user'),
        pathNames: ['/users', /^\/users\/\d+$/],
      },
      {
        icon: CompanyIcon,
        text: t('sidebar.company'),
        href: PATH_NAMES.COMPANIES(),
        pathNames: [
          '/companies',
          '/companies/create',
          /^\/companies\/edit\/\d+$/,
          /^\/companies\/\d+$/,
          '/diagnoses',
        ],
      },
    ],
    [],
  );

  return (
    <Box component="ul" className="px-[16px]">
      {items.map((item: any, index: number) => (
        <Box component="li" key={index + item.text}>
          <Link
            href={item.href}
            className={cn(
              'mb-[16px] flex cursor-pointer items-center px-[12px] py-[8px] font-bold',
              '[&>span]:text-clr-btn-border-secondary [&>svg>path]:stroke-clr-btn-border-secondary',
              checkHighlight(item.pathNames, pathName) &&
                'rounded-lg bg-clr-bg-brand-solid [&>span]:text-white [&>svg>path]:stroke-white',
            )}
          >
            <item.icon className="mr-[12px] min-w-[24px]" />
            {props.isOpen && (
              <>
                <Box
                  component="span"
                  className="text-[16px] font-semibold text-clr-txt-secondary"
                >
                  {item.text}
                </Box>
                <ArrowRightIcon className="ml-auto" />
              </>
            )}
          </Link>
        </Box>
      ))}
    </Box>
  );
}
