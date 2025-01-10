export interface GetUsersRequest {
  ids: number | string | null;
  multi_search: string | null;
  company_id: number | string | null;
  per_page: number;
  page: number;
}
export interface User {
  id: number;
  full_name: string;
  total_company: string;
  name_company: string;
  created_at: string;
}

export interface GetUserResponse {
  currentPage: number;
  total: number;
  lastPage: number;
  perPage: number;
  data: User[];
}

export interface GetDetailUserRequest {
  id: number;
}

export interface UserDiagnosis {
  id: number;
  name: string;
  examinee_count: number;
  exam_date: string;
}

export interface UserCompany {
  id: number;
  name: string;
  work_status_name: string;
  type: number;
  start_end_date: string | null;
  diagnoses: UserDiagnosis[];
}

export interface DetailUser {
  id: number;
  full_name: string;
  company_emails: string[];
  user_email: string | null;
  companies: UserCompany[];
}
