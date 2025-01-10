import { Areas } from '@/types/Areas.type';
import { baseQuery } from './api';

export const getExamReports = (examId: number) => {
  return baseQuery(
    {
      url: `/exams/${examId}/result`,
      method: 'GET',
    },
    {
      area: Areas.GET_DATA_REPORT,
    },
  );
};
