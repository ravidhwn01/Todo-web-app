import * as bcrypt from 'bcrypt';

export const encryptPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = async (
  password: string,
  hashPassword: string,
) => {
  const comparePassword = await bcrypt.compare(password, hashPassword);
  return comparePassword;
};
