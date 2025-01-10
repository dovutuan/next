import { IIndexable } from '@/types/Generic.type';
import queryString from 'query-string';

const buildPathWithSearch = (basepath: string, params: IIndexable) => {
  return `${basepath}?${queryString.stringify(params)}`;
};

export default buildPathWithSearch;
