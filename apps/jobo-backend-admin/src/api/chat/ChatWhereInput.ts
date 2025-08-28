import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  messages?: JsonFilter;
  user?: UserWhereUniqueInput;
};
