import * as React from 'react';
import { useTranslation } from 'react-i18next';
import RawHtmlText from '../raw-html-text';

interface TableTotalCountProps {
  count: number;
}

const TableTotalCount: React.FC<TableTotalCountProps> = (props) => {
  const { t } = useTranslation('common');
  return (
    <RawHtmlText
      content={t('common:number_of_subjects', { value: props.count })}
      className="font-semibold leading-[20px] text-clr-fg-quarterary [&>span]:mx-[4px] [&>span]:font-primary [&>span]:font-bold [&>span]:text-clr-fg-secondary"
    />
  );
};

export default TableTotalCount;
