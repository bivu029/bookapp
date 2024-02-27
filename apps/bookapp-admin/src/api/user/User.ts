import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string;
  firstName: string | null;
  gid: string;
  id: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
