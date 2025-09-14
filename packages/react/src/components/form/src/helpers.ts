export const checkNumber = (str: string) => {
  const re = /^[0-9]*$/;
  return re.test(str);
};

export const checkEmail = (str: string) => {
  const regEx = /^[a-zA-Z0-9._%+-]{4,64}@([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$/;
  return regEx.test(str);
};

export const checkUrl = (str: string) => {
  const re = /^(https?|ftp):\/\/[^\s\/$.?#].\S*$/;
  return re.test(str);
};

export const checkOnlySpace = (str: string) => {
  return str.trim().length === 0;
}