import { IIndexable } from '@/types/Generic.type';
import buildPathWithSearch from '@/utils/buildPathWithSearch';
import queryString from 'query-string';

const PATH_NAMES = {
  FORBIDDEN: (message: string) => `/forbidden?message=${message}`,
  LOGIN: '/login',
  REQUEST_RESET_PSW: '/request-reset-password',
  SETTING_NEW_PASSWORD: '/setting-new-password',
  COMPANIES: (params?: IIndexable) =>
    params ? buildPathWithSearch('companies', params) : '/companies',
  COMPANY_CREATE: (params?: IIndexable) =>
    params
      ? buildPathWithSearch('/companies/create', params)
      : '/companies/create',
  COMPANY_DETAIL: (id: number, params?: IIndexable) =>
    params
      ? buildPathWithSearch(`/companies/${id}`, params)
      : `/companies/${id}`,
  COMPANY_EDIT: (id: number, params?: IIndexable) =>
    params
      ? buildPathWithSearch(`/companies/edit/${id}`, params)
      : `/companies/edit/${id}`,
  USERS: (params?: IIndexable) =>
    params ? `/users/?${queryString.stringify(params)}` : '/users',
  USER_DETAIL: (id: number, params?: IIndexable) =>
    params ? buildPathWithSearch(`/users/${id}`, params) : `/users/${id}`,
  EXAMS: (params?: IIndexable) =>
    params ? `/exams/?${queryString.stringify(params)}` : '/exams',
  DIAGNOSIS_LIST: (params: IIndexable) =>
    buildPathWithSearch('/diagnoses', params),
  EXAM_RESULT_REPORT: (examId: number, params?: IIndexable) =>
    params
      ? buildPathWithSearch(`/report/${examId}`, params)
      : `/report/${examId}`,
};

export default PATH_NAMES;
