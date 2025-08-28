import { Company } from "../company/Company";
import { Interview } from "../interview/Interview";

export type Job = {
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  id: string;
  interviews?: Array<Interview>;
  requirements: string | null;
  salary: number | null;
  title: string | null;
  updatedAt: Date;
};
