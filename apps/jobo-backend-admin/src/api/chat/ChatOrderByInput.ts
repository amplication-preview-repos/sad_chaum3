import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  messages?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
