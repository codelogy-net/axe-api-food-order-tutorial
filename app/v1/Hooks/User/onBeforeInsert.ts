import bcrypt from 'bcrypt';
import { IHookParameter } from 'axe-api';

export default async ({ formData }: IHookParameter) => {
  formData.password = bcrypt.hashSync(formData.password, 10);
};
