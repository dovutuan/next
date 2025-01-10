export interface AxiosErrorResponse {
  status: number;
  statusText: string;
  data: any;
}

export interface AxiosError extends Error {
  response?: AxiosErrorResponse;
  request?: any;
  config?: any;
}

export enum ErrorCodes {
  VALIDATE_FAIL = 422,
}
