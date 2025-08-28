import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  messages?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
