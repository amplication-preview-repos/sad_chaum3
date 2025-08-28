import { JsonFilter } from "../../util/JsonFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InterviewWhereInput = {
  answers?: JsonFilter;
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  questions?: StringNullableFilter;
  ranking?: IntNullableFilter;
  status?: "Option1";
};
