import { GetDiagnosesRequest } from '@/types/Diagnosis.type';
import { baseQuery } from './api';
import { CreateCompanyRequest, GetCompaniesRequest } from '@/types/Company.type';

export const getCompanyList = (params?: GetCompaniesRequest) => {
  return baseQuery({
    url: '/companies',
    method: 'GET',
    params,
  });
};

export const createCompany = (data: CreateCompanyRequest) => {
  return baseQuery({
    url: '/companies',
    method: 'POST',
    data,
  });
};

export const editCompany = (id: number, data: CreateCompanyRequest) => {
  return baseQuery({
    url: `/companies/${id}`,
    method: 'PUT',
    data,
  });
};

export const getDetailCompany = (id: any) => {
  return baseQuery({
    url: `/companies/${id}`,
    method: 'GET',
  });
};

export const getDiagnosisList = (params: GetDiagnosesRequest) => {
  return baseQuery({
    url: '/diagnoses',
    method: 'GET',
    params,
  });
};

export const deleteCompany = (id: any) => {
  return baseQuery({
    url: `/companies/${id}`,
    method: 'DELETE',
  });
};

export const sendEmailInstruction = (id: any) => {
  return baseQuery({
    url: `/companies/${id}/send-instruction-email`,
    method: 'GET',
  });
};
