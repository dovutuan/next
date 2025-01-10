export interface GetExamsRequest {
  ids: number | string | null;
  search: string | null;
  company_id: number | string | null;
  per_page: number;
  page: number;
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

interface Company {
  id: number;
  name: string;
  industry_id: number;
  root_user_id: number;
  last_diagnosed_at: string;
}

interface Diagnosis {
  id: number;
  company_id: number;
  name: string;
  examinee_count: number;
}

export interface ExaminationDataItem {
  id: number;
  employee: User;
  company: Company;
  diagnosis: Diagnosis;
  time_taken: string;
  started_at: string;
}

export interface GetExamsResponse {
  currentPage: number;
  total: number;
  lastPage: number;
  perPage: number;
  data: ExaminationDataItem[];
}
