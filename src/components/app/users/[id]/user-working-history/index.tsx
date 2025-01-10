import DataTable from '@/components/common/data-table';
import { UserCompany } from '@/types/User.type';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useTableHeader from './useTableHeader';
import { styled } from '@mui/material';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';

interface UserWorkingHistoryProps {
  data: UserCompany[] | undefined;
}

const OverrideDataTable = styled(DataTable)(() => ({
  marginTop: '24px',
  '& .MuiDataGrid-columnHeader': {
    background: STYLE_VARIABLES.CLR_BG_BRAND_PRIMARY,
  },
  '& .MuiDataGrid-cell': {
    background: STYLE_VARIABLES.CLR_BG_WHITE,
    color: STYLE_VARIABLES.CLR_TXT_TERTIARY,
  },
}));

const UserWorkingHistory: React.FunctionComponent<UserWorkingHistoryProps> = (
  props,
) => {
  const { data } = props;
  const { t } = useTranslation(['user-detail']);
  const headers = useTableHeader();

  return (
    <>
      {data?.map((item) => (
        <div className="w-full" key={item.id}>
          <p className="color-clr-txt-primary text-[16px] font-[700]">
            {item.name}
          </p>
          <div className="mb-[24px] mt-[12px] w-full rounded-[12px] bg-clr-bg-secondary p-[24px]">
            <div className="flex">
              <div className="flex flex-col gap-[6px]">
                <p className="color-clr-txt-quarterary text-[12px] font-[400] leading-[18px]">
                  {t('user-detail:user_working_history.working_status')}
                </p>
                <p className="color-clr-txt-secondary text-[16px] font-[400] leading-[24px]">
                  {item.work_status_name ?? ' '}
                </p>
              </div>
              <span className="mx-[24px] h-[24px] w-[1px] self-center bg-clr-border-secondary"></span>
              <div className="flex flex-col gap-[6px]">
                <p className="color-clr-txt-quarterary text-[12px] font-[400] leading-[18px]">
                  {t('user-detail:user_working_history.working_period')}
                </p>
                <p className="color-clr-txt-secondary text-[16px] font-[400] leading-[24px]">
                  {item.start_end_date ?? ' '}
                </p>
              </div>
            </div>
            {item?.diagnoses?.length > 0 && (
              <OverrideDataTable columns={headers} rows={item.diagnoses} />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default UserWorkingHistory;
