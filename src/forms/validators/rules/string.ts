export const minCharacters = (limit: number) => (value: string) => {
  const isValid = value.length >= limit;
  return {
    isValid,
    message: `Please type at least ${limit} characters.`,
  };
};

export const maxCharacters = (limit: number) => (value: string) => {
  const isValid = value.length <= limit;
  return {
    isValid,
    message: `Please type at most ${limit} characters.`,
  };
};

export const required = (value: string) => {
  const isValid = value.length > 0;
  return {
    isValid,
    message: `This field is required.`,
  };
};