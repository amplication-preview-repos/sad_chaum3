import { InputJsonValue } from "../../types";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type InterviewUpdateInput = {
  answers?: InputJsonValue;
  company?: CompanyWhereUniqueInput | null;
  job?: JobWhereUniqueInput | null;
  questions?: string | null;
  ranking?: number | null;
  status?: "Option1" | null;
};
