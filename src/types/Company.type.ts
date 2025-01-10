export interface CreateCompanyRequest {
  name: string;
  industry_id: number | null;
  first_name: string;
  first_name_kana: string;
  last_name: string;
  last_name_kana: string;
  email: string;
  sector_id: number | null;
}

export interface GetCompaniesRequest {
  per_page: number;
  page: number;
  sort_field?: string;
  sort_direction?: 'asc' | 'desc';
}

export interface CompanyItem {
  id: number;
  name: string;
  diagnoses_count: number;
  last_diagnosed_at: string | null;
  created_at: string;
}

export interface GetCompanyResponse {
  currentPage: number;
  total: number;
  lastPage: number;
  perPage: number;
  data: CompanyItem[];
}

export interface CompanyDetailResponse {
  id: number;
  email: string;
  industry_name: string;
  name: string;
  root_user_name: string;
  users: any[];
}
