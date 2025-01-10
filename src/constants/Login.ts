/**
 * Regex pattern validate email format
 * @constant
 */
export const EMAIL_REGEX = /^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

/**
 * Regex pattern validate password format
 * @constant
 */
export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,20}$/;
