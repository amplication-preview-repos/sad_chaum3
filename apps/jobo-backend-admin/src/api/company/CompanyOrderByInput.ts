import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  companySize?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  name?: SortOrder;
  recruiter?: SortOrder;
  sector?: SortOrder;
  updatedAt?: SortOrder;
};
