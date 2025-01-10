export interface GetDiagnosesRequest {
  page: number;
  perPage: number;
  company_id: number | null;
}

export interface DiagnosisItemResponse {
  id: number;
  name: string;
  company_name: string;
  completed_at: string;
  created_at: string;
  examinee_count: number;
  started_at: string;
}
