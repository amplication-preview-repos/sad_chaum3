import { ChatUpdateManyWithoutCompaniesInput } from "./ChatUpdateManyWithoutCompaniesInput";
import { InterviewUpdateManyWithoutCompaniesInput } from "./InterviewUpdateManyWithoutCompaniesInput";
import { JobUpdateManyWithoutCompaniesInput } from "./JobUpdateManyWithoutCompaniesInput";
import { InputJsonValue } from "../../types";

export type CompanyUpdateInput = {
  chats?: ChatUpdateManyWithoutCompaniesInput;
  companySize?: string | null;
  interviews?: InterviewUpdateManyWithoutCompaniesInput;
  jobs?: JobUpdateManyWithoutCompaniesInput;
  logo?: InputJsonValue;
  name?: string | null;
  recruiter?: string | null;
  sector?: string | null;
};
