import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InterviewUpdateManyWithoutJobsInput } from "./InterviewUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  interviews?: InterviewUpdateManyWithoutJobsInput;
  requirements?: string | null;
  salary?: number | null;
  title?: string | null;
};
