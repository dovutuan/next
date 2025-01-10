export enum ResponseStatus {
  VALIDATE_FAIL = 422,
  BAD_REQUEST = 400,
  OK = 200,
  UN_AUTHENTICATED = 401,
  NO_PERMISSION = 403,
}

export enum ResponseCodes {
  OK = 'ok',
  OTP_EXPIRED = 'expired_invitation_otp',
  _401 = '401',
  TOKEN_USED = '409',
  CONFLICT = 'conflict',
  REQUIRE_EXAM_LOGIN = 'require_exam_login',
  NOT_FOUND = 'not_found',
}
