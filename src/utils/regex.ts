export const isValidRegex = (pattern: string) => {
  // Check if the pattern starts and ends with slashes
  const regexString = /^\/(.+)\/([gimuy]*)$/.exec(pattern);

  if (!regexString) {
    return false; // Not in the expected format
  }

  const [, innerPattern, flags] = regexString;

  try {
    const regex = new RegExp(innerPattern, flags); // Try creating the regex
    return regex; // Valid regex
  } catch {
    return null; // Invalid regex
  }
};
