import { JsonValue } from "type-fest";
import { Company } from "../company/Company";
import { Job } from "../job/Job";

export type Interview = {
  answers: JsonValue;
  company?: Company | null;
  createdAt: Date;
  id: string;
  job?: Job | null;
  questions: string | null;
  ranking: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
