import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  firstName?: string | null;
  gid: string;
  password: string;
  roles: InputJsonValue;
  username: string;
};
