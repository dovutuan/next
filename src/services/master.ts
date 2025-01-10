import { baseQuery } from './api';

export const getSectors = () => {
  return baseQuery({
    url: '/sectors',
    method: 'GET',
  });
};
