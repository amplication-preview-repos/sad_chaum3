import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type JobWhereInput = {
  company?: CompanyWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  requirements?: StringNullableFilter;
  salary?: IntNullableFilter;
  title?: StringNullableFilter;
};
