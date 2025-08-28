import { Company } from "../company/Company";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Chat = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  messages: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
