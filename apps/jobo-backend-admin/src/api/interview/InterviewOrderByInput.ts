import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  answers?: SortOrder;
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  questions?: SortOrder;
  ranking?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
