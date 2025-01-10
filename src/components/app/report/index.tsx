'use client';
import React from 'react';
import PageTitle from '@/components/common/page-title';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { OperationIds } from '@/types/OperationIds.type';
import Box from '@mui/material/Box';
import ReportContainer from '@/components/app/report/content';
// import ArrowLeftBorderIcon from '/public/assets/icons/arrow-left-border.svg';
// import ArrowRightBorderIcon from '/public/assets/icons/arrow-right-border.svg';
import useApi from '@/services/useApi';
import { getExamReports } from '@/services/report';
import { useAppSelector } from '@/store/hooks';
import { getResponseData } from '@/store/selectors';
import TaskSuspenser from '@/components/common/task-suspenser';
import { Areas } from '@/types/Areas.type';
import { ModalNames } from '@/types/ModalNames.type';
import useHandleAppModule from '@/hooks/useHandleAppModule';
import { ResponseStatus } from '@/types/Codes.type';
import PATH_NAMES from '@/constants/PathNames';

const Report: React.FC = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { openModal, closeModal } = useHandleAppModule();

  React.useEffect(() => {
    initData();
    return cleanup;
  }, []);

  const { call } = useApi({
    request: getExamReports,
    operationId: OperationIds.GET_DATA_REPORT,
  });

  const reportDataResponse = useAppSelector((state) =>
    getResponseData(state, OperationIds.GET_DATA_REPORT),
  ) as any;

  const reportData = React.useMemo(() => {
    return reportDataResponse;
  }, [reportDataResponse]);

  const initData = () => {
    call(Number(id)).catch(({ response }) => {
      if (response.status === ResponseStatus.NO_PERMISSION) {
        router.push(PATH_NAMES.FORBIDDEN(response.message));
      }
    });
  };

  const cleanup = () => {
    // To to remove app state
  };

  const handleShowModal = (modalNames: ModalNames) => {
    if (modalNames) {
      openModal(modalNames);
    }
  };

  const handleCloseModal = (modalNames: ModalNames) => {
    if (modalNames) {
      closeModal(modalNames);
    }
  };

  // const getNextEmployeeId = () => {
  //   // To do
  //   return 0;
  // };

  // const getPrevEmployeeId = () => {
  //   // To do
  //   return 0;
  // };

  // const handleChangeEmployee = (type: number) => {
  //   // 0 - prev
  //   // 1 - next
  //   const func = !type ? getPrevEmployeeId : getNextEmployeeId;
  //   const employeeId = func();
  //   // Redirect or call api with employee Id
  //   return employeeId;
  // };

  return (
    <TaskSuspenser areas={[Areas.GET_DATA_REPORT]}>
      <Box className="h-full w-full">
        <Box className="mb-[20px]">
          <Box className="flex items-center justify-between">
            <PageTitle
              backPath={searchParams.get('backlink')!}
              title={`${reportData?.employee?.last_name} ${reportData?.employee?.first_name}`}
            />
            {/* <Box className="flex items-center gap-3">
              <Box component="button" onClick={() => handleChangeEmployee(0)}>
                <ArrowLeftBorderIcon />
              </Box>
              <Box component="button">
                <ArrowRightBorderIcon onClick={() => handleChangeEmployee(1)} />
              </Box>
            </Box> */}
          </Box>
          <Box className="mt-2 text-[16px] text-[#475467]">
            {reportData?.diagnosis?.name}
          </Box>
        </Box>
        <Box className="main-container">
          <ReportContainer
            pageData={reportData}
            handleShowModal={handleShowModal}
            handleCloseModal={handleCloseModal}
          />
        </Box>
      </Box>
    </TaskSuspenser>
  );
};

export default React.memo(Report);
