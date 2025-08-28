import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InterviewCreateNestedManyWithoutJobsInput } from "./InterviewCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  interviews?: InterviewCreateNestedManyWithoutJobsInput;
  requirements?: string | null;
  salary?: number | null;
  title?: string | null;
};
