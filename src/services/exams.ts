import { GetExamsRequest } from '@/types/ExaminationData.type';
import { baseQuery } from './api';

export const getExaminationData = (params?: GetExamsRequest) => {
  return baseQuery({
    url: '/exams',
    method: 'GET',
    params,
  });
};
