import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  messages?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
