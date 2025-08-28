import { ChatCreateNestedManyWithoutCompaniesInput } from "./ChatCreateNestedManyWithoutCompaniesInput";
import { InterviewCreateNestedManyWithoutCompaniesInput } from "./InterviewCreateNestedManyWithoutCompaniesInput";
import { JobCreateNestedManyWithoutCompaniesInput } from "./JobCreateNestedManyWithoutCompaniesInput";
import { InputJsonValue } from "../../types";

export type CompanyCreateInput = {
  chats?: ChatCreateNestedManyWithoutCompaniesInput;
  companySize?: string | null;
  interviews?: InterviewCreateNestedManyWithoutCompaniesInput;
  jobs?: JobCreateNestedManyWithoutCompaniesInput;
  logo?: InputJsonValue;
  name?: string | null;
  recruiter?: string | null;
  sector?: string | null;
};
