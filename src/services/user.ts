import { GetUsersRequest } from '@/types/User.type';
import { baseQuery } from './api';

export const getUsers = (params?: GetUsersRequest) => {
  return baseQuery({
    url: '/users',
    method: 'GET',
    params,
  });
};

export const getDetailUser = (id: any) => {
  return baseQuery({
    url: `/users/${id}`,
    method: 'GET',
  });
};

export const getCurrentAdmin = () => {
  return baseQuery({
    url: '/administrators/current',
    method: 'GET',
  });
};
